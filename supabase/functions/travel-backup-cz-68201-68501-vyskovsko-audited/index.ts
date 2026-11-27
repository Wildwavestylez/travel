import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const PROJECT_URL = "https://ipnkjcpewtdaikiyzktv.supabase.co";
const RUN_KEY = Deno.env.get("VYSKOVSKO_BACKUP_RUN_KEY") ?? "";
const API_ROOT = "/TRAVEL_BACKUP/AUDITED";
const DISPLAY_ROOT = "/Apps/TRAVEL-Backup-Kalsped/TRAVEL_BACKUP/AUDITED";
const REGION = "Jihomoravský kraj";
const GROUP = "68201-68501";
const EXPECTED_CODES = ["68201","68301","68303","68304","68305","68308","68321","68323","68333","68335","68341","68351","68352","68354","68401","68501"];
const EXPECTED_IDS = [10565,10566,10567,10568,10569,10570,10571,10572,10573,10574,10575,10576,10577,10578,10579,10580];
const EXPECTED_FACTS = 146;
const EXPECTED_MAP_POINTS = 138;

function reply(body: unknown, status = 200) {
  return new Response(JSON.stringify(body, null, 2), { status, headers: {
    "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store",
    "X-Content-Type-Options": "nosniff"
  }});
}
function stable(v: any): any {
  if (Array.isArray(v)) return v.map(stable);
  if (v && typeof v === "object") {
    const out: Record<string, any> = {};
    for (const k of Object.keys(v).sort()) out[k] = stable(v[k]);
    return out;
  }
  return v;
}
function jsonBytes(v: unknown): Uint8Array { return new TextEncoder().encode(JSON.stringify(v, null, 2)); }
function canonicalBytes(v: unknown): Uint8Array { return new TextEncoder().encode(JSON.stringify(stable(v))); }
async function sha256(bytes: Uint8Array): Promise<string> {
  const d = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(d)).map(b => b.toString(16).padStart(2, "0")).join("");
}
function sqlString(v: string): string { return "'" + v.replaceAll("'", "''") + "'"; }
function sqlValue(v: unknown, type = ""): string {
  if (v === null || v === undefined) return "NULL";
  if (type === "jsonb") return sqlString(JSON.stringify(v)) + "::jsonb";
  if (typeof v === "number") return Number.isFinite(v) ? String(v) : "NULL";
  if (typeof v === "boolean") return v ? "TRUE" : "FALSE";
  return sqlString(String(v));
}
async function supa(path: string, key: string) {
  const r = await fetch(PROJECT_URL + "/rest/v1/" + path, {
    headers: { apikey: key, Authorization: "Bearer " + key, "Content-Type": "application/json" }
  });
  if (!r.ok) throw new Error("Supabase read failed (" + r.status + ") on " + path + ": " + (await r.text()).slice(0, 250));
  const t = await r.text();
  return t ? JSON.parse(t) : null;
}
async function dropboxPost(url: string, token: string, body: unknown) {
  return await fetch(url, { method: "POST", headers: {
    Authorization: "Bearer " + token, "Content-Type": "application/json"
  }, body: JSON.stringify(body) });
}
async function ensureFolder(path: string, token: string) {
  const r = await dropboxPost("https://api.dropboxapi.com/2/files/create_folder_v2", token, { path, autorename: false });
  if (r.ok) return;
  const t = await r.text();
  if (!t.includes("path/conflict/folder")) throw new Error("Dropbox folder creation failed (" + r.status + "): " + t.slice(0, 180));
}
async function uploadVerified(path: string, bytes: Uint8Array, token: string) {
  const check = await dropboxPost("https://api.dropboxapi.com/2/files/get_metadata", token, { path });
  if (check.ok) throw new Error("Refusing to overwrite existing backup object: " + path);
  const ct = await check.text();
  if (check.status !== 409 || !ct.includes("path/not_found")) throw new Error("Dropbox metadata preflight failed (" + check.status + "): " + ct.slice(0, 160));
  const expected = await sha256(bytes);
  const up = await fetch("https://content.dropboxapi.com/2/files/upload", { method: "POST", headers: {
    Authorization: "Bearer " + token, "Content-Type": "application/octet-stream",
    "Dropbox-API-Arg": JSON.stringify({ path, mode: "add", autorename: false, mute: true })
  }, body: bytes });
  if (!up.ok) throw new Error("Dropbox upload failed (" + up.status + "): " + (await up.text()).slice(0, 180));
  const meta = await up.json();
  const down = await fetch("https://content.dropboxapi.com/2/files/download", { method: "POST", headers: {
    Authorization: "Bearer " + token, "Dropbox-API-Arg": JSON.stringify({ path })
  }});
  if (!down.ok) throw new Error("Dropbox read-back failed (" + down.status + ") for " + path);
  const actual = await sha256(new Uint8Array(await down.arrayBuffer()));
  if (expected !== actual) throw new Error("Dropbox SHA-256 read-back mismatch: " + path);
  return { path, bytes: bytes.length, sha256: expected, dropbox_file_id: meta.id, verified: true, readback_sha256: actual };
}
function restoreSql(postalRows: any[], mapRows: any[], schemaRows: any[]) {
  const pcCols = ["id","country_code","postal_code","city","municipality","district","region","representative_name","representative_type","street","latitude","longitude","area_type","content","sources","data_version","status","created_at","updated_at"];
  const mapCols = ["postal_id","country_code","postal_code","city","fact_id","title","category","lat","lon","updated_at"];
  const schemaCols = ["country_code","schema_version","schema","updated_at"];
  const insert = (table: string, cols: string[], rows: any[], jsonCols: string[], conflict: string) => rows.map(row =>
    "INSERT INTO " + table + " (" + cols.join(", ") + ")\nVALUES (" +
    cols.map(c => sqlValue(row[c], jsonCols.includes(c) ? "jsonb" : "")).join(", ") +
    ")\nON CONFLICT (" + conflict + ") DO UPDATE SET\n  " +
    cols.filter(c => !conflict.split(", ").includes(c)).map(c => c + " = EXCLUDED." + c).join(",\n  ") + ";"
  ).join("\n\n");
  return [
    "-- Exact-scope restore for CZ Vyškovsko–Slavkovsko–Bučovicko audit.",
    "-- Contains only 16 published V5 postal rows, 138 linked map points, and the CZ validation schema.",
    "-- Review target project and live-state preconditions before execution.",
    "BEGIN;",
    insert("public.postal_codes", pcCols, postalRows, ["content","sources"], "id"),
    insert("public.explorer_map_points", mapCols, mapRows, [], "postal_id, fact_id"),
    insert("public.explorer_validation_schemas", schemaCols, schemaRows, ["schema"], "country_code"),
    "SELECT setval(pg_get_serial_sequence('public.postal_codes','id'), GREATEST((SELECT COALESCE(MAX(id),1) FROM public.postal_codes),1), true);",
    "COMMIT;",
    ""
  ].join("\n\n");
}

Deno.serve(async (req: Request) => {
  if (req.method !== "GET") return reply({ error: "Use GET." }, 405);
  const u = new URL(req.url);
  if (u.searchParams.get("run") !== RUN_KEY) return reply({ error: "Not found." }, 404);
  const preview = u.searchParams.get("preview") === "1";
  const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  if (!serviceKey) return reply({ error: "Missing server-side Supabase configuration; no export performed." }, 500);
  try {
    const pcSelect = "id,country_code,postal_code,city,municipality,district,region,representative_name,representative_type,street,latitude,longitude,area_type,content,sources,data_version,status,created_at,updated_at";
    const pcParams = new URLSearchParams({
      select: pcSelect, country_code: "eq.CZ",
      postal_code: "in.(" + EXPECTED_CODES.map(c => '"' + c + '"').join(",") + ")",
      order: "postal_code.asc", limit: "20"
    });
    const postalRows = await supa("postal_codes?" + pcParams.toString(), serviceKey);
    if (!Array.isArray(postalRows)) return reply({ error: "Postal-code response was not an array. No export performed." }, 502);
    const codes = postalRows.map((r: any) => String(r.postal_code));
    const ids = postalRows.map((r: any) => Number(r.id));
    const facts = postalRows.reduce((n: number, r: any) => n + (Array.isArray(r.content?.facts) ? r.content.facts.length : 0), 0);
    const exact = postalRows.length === EXPECTED_CODES.length &&
      JSON.stringify(codes) === JSON.stringify(EXPECTED_CODES) &&
      JSON.stringify(ids) === JSON.stringify(EXPECTED_IDS);
    if (!exact) return reply({ error: "Exact postal-code membership check failed. No Dropbox export performed.", received_count: postalRows.length, received_codes: codes, received_ids: ids }, 409);
    const invalid = postalRows.filter((r: any) => r.country_code !== "CZ" || r.data_version !== 5 || r.status !== "published" || r.region !== REGION);
    if (invalid.length) return reply({ error: "V5/published/region pre-export guard failed. No Dropbox export performed.", exceptions: invalid.map((r: any) => ({ postal_code: r.postal_code, data_version: r.data_version, status: r.status, region: r.region })) }, 409);
    if (facts !== EXPECTED_FACTS) return reply({ error: "Unexpected fact count. No Dropbox export performed.", fact_count: facts, expected_fact_count: EXPECTED_FACTS }, 409);

    const mapParams = new URLSearchParams({
      select: "postal_id,country_code,postal_code,city,fact_id,title,category,lat,lon,updated_at",
      postal_id: "in.(" + EXPECTED_IDS.join(",") + ")",
      order: "postal_id.asc,fact_id.asc", limit: "1000"
    });
    const mapRows = await supa("explorer_map_points?" + mapParams.toString(), serviceKey);
    if (!Array.isArray(mapRows) || mapRows.length !== EXPECTED_MAP_POINTS) {
      return reply({ error: "Map-point inventory differs from the audited baseline. No Dropbox export performed.", received_map_points: Array.isArray(mapRows) ? mapRows.length : null, expected_map_points: EXPECTED_MAP_POINTS }, 409);
    }
    const schemaRows = await supa("explorer_validation_schemas?select=country_code,schema_version,schema,updated_at&country_code=eq.CZ&limit=1", serviceKey);
    if (!Array.isArray(schemaRows) || schemaRows.length !== 1) return reply({ error: "CZ validation schema missing or ambiguous. No Dropbox export performed." }, 409);
    const baseChecks = { postal_codes: postalRows.length, facts, explorer_map_points: mapRows.length, validation_schemas: schemaRows.length, all_in_scope_country: true, all_v5_published: true, exact_ids_and_codes: true };
    if (preview) return reply({ result: "PREVIEW_ONLY_NO_UPLOAD", exact_postal_codes: codes, exact_record_ids: ids, counts: baseChecks, note: "Read-only preview; no Dropbox files or database rows were written." });

    const source = { platform: "supabase", project_id: "ipnkjcpewtdaikiyzktv", table: "public.postal_codes", environment: "production" };
    const scope = {
      country_codes: ["CZ"], operation: "AUDIT", region: REGION, postcode_group: GROUP,
      wave_id: "CZ-AUDIT-VYSKOVSKO-SLAVKOVSKO-68201-68501-001", predecessor_backup_id: null,
      selection_description: "Exact 16 existing Czech postal-code records in the completed Vyškovsko–Slavkovsko–Bučovicko audit scope; not a continuous numeric interval.",
      record_ids: EXPECTED_IDS, postcodes: EXPECTED_CODES, members_complete: true
    };
    const dataVersion = { schema_version: "CZ_V2", content_version: 5 };
    const rowsSorted = [...postalRows].sort((a: any, b: any) => a.postal_code.localeCompare(b.postal_code));
    const canonicalPayload = { source, scope, data_version: dataVersion, postal_codes: rowsSorted, explorer_map_points: mapRows, explorer_validation_schemas: schemaRows };
    const scopeHash = await sha256(canonicalBytes(canonicalPayload));
    const appKey = Deno.env.get("DROPBOX_APP_KEY"), appSecret = Deno.env.get("DROPBOX_APP_SECRET"), refreshToken = Deno.env.get("DROPBOX_REFRESH_TOKEN");
    if (!appKey || !appSecret || !refreshToken) return reply({ error: "Missing server-side Dropbox configuration. No upload performed." }, 500);
    const tokenResp = await fetch("https://api.dropboxapi.com/oauth2/token", {
      method: "POST", headers: { Authorization: "Basic " + btoa(appKey + ":" + appSecret), "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ grant_type: "refresh_token", refresh_token: refreshToken })
    });
    if (!tokenResp.ok) return reply({ error: "Dropbox OAuth refresh failed; no backup uploaded.", http_status: tokenResp.status }, 502);
    const tokenData = await tokenResp.json();
    if (typeof tokenData.access_token !== "string") return reply({ error: "Dropbox returned no access token; no backup uploaded." }, 502);
    const token = tokenData.access_token;
    const stamp = new Date().toISOString().replaceAll(":", "-").replaceAll(".", "-");
    const backupId = "CZ-AUDIT-VYSKOVSKO-SLAVKOVSKO-68201-68501-" + stamp;
    const folderName = "CZ_AUDIT_VYSKOVSKO_SLAVKOVSKO_68201-68501_" + stamp;
    const apiFolder = API_ROOT + "/" + folderName, displayFolder = DISPLAY_ROOT + "/" + folderName;
    await ensureFolder("/TRAVEL_BACKUP", token);
    await ensureFolder(API_ROOT, token);
    await ensureFolder(apiFolder, token);

    const bundle = {
      backup_type: "AUDIT", backup_version: "1.0", backup_id: backupId, created_at: new Date().toISOString(),
      source, scope, data_version: dataVersion,
      counts: { postal_codes: rowsSorted.length, facts, explorer_map_points: mapRows.length, explorer_validation_schemas: schemaRows.length },
      postal_codes: rowsSorted, explorer_map_points: mapRows, explorer_validation_schemas: schemaRows
    };
    const backupBytes = jsonBytes(bundle), objectHash = await sha256(backupBytes);
    const sqlBytes = new TextEncoder().encode(restoreSql(rowsSorted, mapRows, schemaRows));
    const jsonFile = await uploadVerified(apiFolder + "/CZ_AUDIT_VYSKOVSKO_SLAVKOVSKO_68201-68501_backup.json", backupBytes, token);
    const sqlFile = await uploadVerified(apiFolder + "/CZ_AUDIT_VYSKOVSKO_SLAVKOVSKO_68201-68501_restore.sql", sqlBytes, token);
    const manifest = {
      manifest_version: "1.0", backup_id: backupId, backup_type: "AUDIT", created_at: bundle.created_at,
      source, scope, data_version: dataVersion, record_count: rowsSorted.length, fact_count: facts, map_point_count: mapRows.length,
      fingerprint: { algorithm: "SHA-256", canonical_scope_hash: scopeHash, object_sha256: objectHash },
      storage: { provider: "dropbox", path: displayFolder, immutable: true },
      validation: { status: "VERIFIED", structural_validation: true, readback_verified: true, verified_at: new Date().toISOString(), verified_record_count: rowsSorted.length, verified_scope_hash: scopeHash, error: null },
      retention: { class: "AUDIT_HISTORY", delete_after: null }
    };
    const manifestPath = apiFolder + "/manifest.json";
    const manifestFile = await uploadVerified(manifestPath, jsonBytes(manifest), token);
    const mr = await fetch("https://content.dropboxapi.com/2/files/download", { method: "POST", headers: {
      Authorization: "Bearer " + token, "Dropbox-API-Arg": JSON.stringify({ path: manifestPath })
    }});
    if (!mr.ok) throw new Error("Manifest read-back failed (" + mr.status + ").");
    const manifestBytes = new Uint8Array(await mr.arrayBuffer());
    if (await sha256(manifestBytes) !== manifestFile.sha256) throw new Error("Manifest SHA-256 read-back mismatch.");
    const manifestRead = JSON.parse(new TextDecoder().decode(manifestBytes));
    if (manifestRead.validation?.status !== "VERIFIED" || manifestRead.validation?.readback_verified !== true ||
        manifestRead.validation?.verified_record_count !== EXPECTED_CODES.length || manifestRead.validation?.verified_scope_hash !== scopeHash) {
      throw new Error("Manifest verification fields failed.");
    }
    return reply({
      result: "BACKUP_AND_READBACK_VERIFIED", backup_id: backupId, backup_folder: displayFolder, counts: baseChecks,
      canonical_scope_hash: scopeHash, object_sha256: objectHash, files: [jsonFile, sqlFile, manifestFile],
      manifest: manifestRead, note: "Exact-scope export only. All three Dropbox files were uploaded add-only and read back with SHA-256 verification. No database rows were written."
    });
  } catch (e) {
    return reply({ error: "Backup stopped. Do not retry blindly; inspect the timestamped Dropbox folder first.", details: String(e) }, 500);
  }
});