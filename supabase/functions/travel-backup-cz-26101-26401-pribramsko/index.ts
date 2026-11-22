import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const PROJECT_URL = "https://ipnkjcpewtdaikiyzktv.supabase.co";
const RUN_KEY = "REPLACE_WITH_SUPABASE_ONLY_RUN_KEY"; // Never commit the live run key.
const WAVE_ID = "CZ-AUDIT-PRIBRAMSKO-26101-26401-001";
const EXPECTED_CODES = ["26101","26202","26203","26204","26205","26206","26211","26212","26213","26214","26215","26221","26222","26223","26225","26231","26232","26241","26242","26243","26244","26251","26252","26255","26256","26261","26262","26263","26272","26281","26284","26285","26291","26293","26301","26401"];
const EXPECTED_IDS = [8719,8720,8721,8722,8723,8724,8725,8726,8727,8728,8729,8730,8731,8732,8733,8734,8735,8736,8737,8738,8739,8740,8741,8742,8743,8744,8745,8746,8747,8748,8749,8750,8751,8752,8753,8754];
const DROPBOX_ROOT = "/TRAVEL_BACKUP/AUDITED";
const DISPLAY_ROOT = "/Apps/TRAVEL-Backup-Kalsped/TRAVEL_BACKUP/AUDITED";

function reply(body: unknown, status = 200) {
  return new Response(JSON.stringify(body, null, 2), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff" }
  });
}
function stable(value: any): any {
  if (Array.isArray(value)) return value.map(stable);
  if (value && typeof value === "object") {
    const out: Record<string, any> = {};
    for (const key of Object.keys(value).sort()) out[key] = stable(value[key]);
    return out;
  }
  return value;
}
function jsonBytes(value: unknown): Uint8Array {
  return new TextEncoder().encode(JSON.stringify(value, null, 2));
}
function canonicalBytes(value: unknown): Uint8Array {
  return new TextEncoder().encode(JSON.stringify(stable(value)));
}
async function sha256(bytes: Uint8Array): Promise<string> {
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest)).map(b => b.toString(16).padStart(2, "0")).join("");
}
function sqlString(v: string): string { return "'" + v.replaceAll("'", "''") + "'"; }
function sqlValue(v: unknown, type = ""): string {
  if (v === null || v === undefined) return "NULL";
  if (type === "jsonb") return sqlString(JSON.stringify(v)) + "::jsonb";
  if (typeof v === "number") return Number.isFinite(v) ? String(v) : "NULL";
  if (typeof v === "boolean") return v ? "TRUE" : "FALSE";
  return sqlString(String(v));
}
async function supa(path: string, key: string, init: RequestInit = {}) {
  const r = await fetch(PROJECT_URL + "/rest/v1/" + path, {
    ...init,
    headers: { apikey: key, Authorization: "Bearer " + key, "Content-Type": "application/json", ...(init.headers || {}) }
  });
  if (!r.ok) throw new Error("Supabase request failed (" + r.status + ") on " + path + ": " + (await r.text()).slice(0, 400));
  const txt = await r.text();
  return txt ? JSON.parse(txt) : null;
}
async function dbx(url: string, token: string, body: unknown) {
  return await fetch(url, { method: "POST", headers: { Authorization: "Bearer " + token, "Content-Type": "application/json" }, body: JSON.stringify(body) });
}
async function ensureFolder(path: string, token: string) {
  const r = await dbx("https://api.dropboxapi.com/2/files/create_folder_v2", token, { path, autorename: false });
  if (r.ok) return;
  const t = await r.text();
  if (!t.includes("path/conflict/folder")) throw new Error("Dropbox folder creation failed (" + r.status + "): " + t.slice(0, 250));
}
async function uploadVerified(path: string, bytes: Uint8Array, token: string) {
  const check = await dbx("https://api.dropboxapi.com/2/files/get_metadata", token, { path });
  if (check.ok) throw new Error("Refusing to overwrite existing backup object: " + path);
  const checkText = await check.text();
  if (check.status !== 409 || !checkText.includes("path/not_found")) {
    throw new Error("Dropbox metadata preflight failed for " + path + " (" + check.status + "): " + checkText.slice(0, 200));
  }
  const expected = await sha256(bytes);
  const up = await fetch("https://content.dropboxapi.com/2/files/upload", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/octet-stream",
      "Dropbox-API-Arg": JSON.stringify({ path, mode: "add", autorename: false, mute: true })
    },
    body: bytes
  });
  if (!up.ok) throw new Error("Dropbox upload failed (" + up.status + "): " + (await up.text()).slice(0, 250));
  const meta = await up.json();
  const down = await fetch("https://content.dropboxapi.com/2/files/download", {
    method: "POST",
    headers: { Authorization: "Bearer " + token, "Dropbox-API-Arg": JSON.stringify({ path }) }
  });
  if (!down.ok) throw new Error("Dropbox read-back failed (" + down.status + ") for " + path);
  const downloaded = new Uint8Array(await down.arrayBuffer());
  const actual = await sha256(downloaded);
  if (expected !== actual) throw new Error("Dropbox SHA-256 read-back mismatch: " + path);
  return { path, bytes: bytes.length, sha256: expected, dropbox_file_id: meta.id, verified: true, readback_sha256: actual };
}
function restoreSql(postalRows: any[], mapRows: any[], schemaRows: any[]) {
  const pcCols = ["id","country_code","postal_code","city","municipality","district","region","representative_name","representative_type","street","latitude","longitude","area_type","content","sources","data_version","status","created_at","updated_at"];
  const mapCols = ["postal_id","country_code","postal_code","city","fact_id","title","category","lat","lon","updated_at"];
  const schemaCols = ["country_code","schema_version","schema","updated_at"];
  const insert = (table: string, cols: string[], rows: any[], jsonCols: string[]) => {
    const updates = cols.filter(c => !((table === "public.postal_codes" && c === "id") || (table === "public.explorer_map_points" && (c === "postal_id" || c === "fact_id")) || (table === "public.explorer_validation_schemas" && c === "country_code")))
      .map(c => c + " = EXCLUDED." + c).join(",\n  ");
    return rows.map(row => "INSERT INTO " + table + " (" + cols.join(", ") + ")\nVALUES (" +
      cols.map(c => sqlValue(row[c], jsonCols.includes(c) ? "jsonb" : "")).join(", ") +
      ")\nON CONFLICT (" + (table === "public.postal_codes" ? "id" : table === "public.explorer_map_points" ? "postal_id, fact_id" : "country_code") +
      ") DO UPDATE SET\n  " + updates + ";").join("\n\n");
  };
  return [
    "-- Exact-scope restore for CZ Příbramsko audit work wave.",
    "-- Contains only 36 postal rows, their linked map points and the CZ validation schema.",
    "-- Review target project and live-state preconditions before execution.",
    "BEGIN;",
    insert("public.postal_codes", pcCols, postalRows, ["content","sources"]),
    insert("public.explorer_map_points", mapCols, mapRows, []),
    insert("public.explorer_validation_schemas", schemaCols, schemaRows, ["schema"]),
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
    const waveFilter = "backup_work_waves?select=wave_id,status,target_record_ids,target_postcodes,members_complete,schema_version,content_version&wave_id=eq." + encodeURIComponent(WAVE_ID) + "&limit=1";
    const waves = await supa(waveFilter, serviceKey);
    if (!Array.isArray(waves) || waves.length !== 1) return reply({ error: "Exact work-wave registry entry missing or ambiguous. No data export performed." }, 409);
    const wave = waves[0];
    if (JSON.stringify(wave.target_postcodes) !== JSON.stringify(EXPECTED_CODES) ||
        JSON.stringify(wave.target_record_ids) !== JSON.stringify(EXPECTED_IDS) ||
        wave.members_complete !== true || wave.schema_version !== "CZ_V2" || String(wave.content_version) !== "5") {
      return reply({ error: "Work-wave membership does not match the function's fixed scope. No data export performed." }, 409);
    }
    if (wave.status !== "IN_PROGRESS" && !preview) return reply({ error: "Work wave is not in the expected IN_PROGRESS state.", current_status: wave.status }, 409);

    const pcSelect = "id,country_code,postal_code,city,municipality,district,region,representative_name,representative_type,street,latitude,longitude,area_type,content,sources,data_version,status,created_at,updated_at";
    const pcParams = new URLSearchParams({
      select: pcSelect, country_code: "eq.CZ",
      postal_code: "in.(" + EXPECTED_CODES.map(c => '"' + c + '"').join(",") + ")",
      order: "postal_code.asc", limit: "100"
    });
    const postalRows = await supa("postal_codes?" + pcParams.toString(), serviceKey);
    const codes = postalRows.map((r: any) => r.postal_code);
    const rowIds = postalRows.map((r: any) => Number(r.id));
    const expectedCodesSorted = [...EXPECTED_CODES].sort();
    const expectedIdsSorted = [...EXPECTED_IDS].sort((a,b)=>a-b);
    if (postalRows.length !== 36 ||
        JSON.stringify([...codes].sort()) !== JSON.stringify(expectedCodesSorted) ||
        JSON.stringify([...rowIds].sort((a,b)=>a-b)) !== JSON.stringify(expectedIdsSorted)) {
      return reply({ error: "Exact source membership check failed. No map-point or Dropbox export performed.", received_count: postalRows.length, received_codes: codes }, 409);
    }
    const facts = postalRows.flatMap((r: any) => Array.isArray(r.content?.facts) ? r.content.facts.map((f: any) => ({ postal_id: Number(r.id), fact_id: String(f.id) })) : []);
    const postalIds = rowIds;
    const mapParams = new URLSearchParams({
      select: "postal_id,country_code,postal_code,city,fact_id,title,category,lat,lon,updated_at",
      postal_id: "in.(" + postalIds.join(",") + ")",
      order: "postal_id.asc,fact_id.asc", limit: "1000"
    });
    const mapRows = await supa("explorer_map_points?" + mapParams.toString(), serviceKey);
    const mapKeys = new Set(mapRows.map((m: any) => Number(m.postal_id) + "|" + String(m.fact_id)));
    const factKeys = new Set(facts.map((f: any) => f.postal_id + "|" + f.fact_id));
    const missingMapPoints = [...factKeys].filter(k => !mapKeys.has(k));
    const extraMapPoints = [...mapKeys].filter(k => !factKeys.has(k));
    if (missingMapPoints.length || extraMapPoints.length || mapRows.length !== facts.length) {
      return reply({ error: "Fact/map-point membership check failed. No Dropbox export performed.", fact_count: facts.length, map_point_count: mapRows.length, missing_map_points: missingMapPoints.length, extra_map_points: extraMapPoints.length }, 409);
    }
    const schemaParams = new URLSearchParams({ select: "country_code,schema_version,schema,updated_at", country_code: "eq.CZ", limit: "1" });
    const schemaRows = await supa("explorer_validation_schemas?" + schemaParams.toString(), serviceKey);
    if (!Array.isArray(schemaRows) || schemaRows.length !== 1) return reply({ error: "CZ validation schema missing or ambiguous. No Dropbox export performed." }, 409);

    const statusCounts = {
      validated: postalRows.filter((r: any) => r.status === "validated").length,
      placeholder: postalRows.filter((r: any) => r.status === "placeholder").length,
      published: postalRows.filter((r: any) => r.status === "published").length
    };
    const baseChecks = {
      postal_codes: postalRows.length, facts: facts.length, map_points: mapRows.length,
      validation_schemas: schemaRows.length, status_counts: statusCounts,
      all_in_scope_country: postalRows.every((r: any) => r.country_code === "CZ"),
      all_fact_map_pairs_match: missingMapPoints.length === 0 && extraMapPoints.length === 0
    };
    if (preview) return reply({ result: "PREVIEW_ONLY_NO_UPLOAD", wave_id: WAVE_ID, exact_postal_codes: codes, exact_record_ids: rowIds, counts: baseChecks, current_versions: [...new Set(postalRows.map((r: any) => r.data_version))], current_statuses: [...new Set(postalRows.map((r: any) => r.status))], note: "Read-only preview. Only the 36 selected postal rows, their linked map points and the CZ schema were read; no Dropbox files or database rows were written." });

    const invalid = postalRows.filter((r: any) => r.data_version !== 5 || r.status !== "published" || r.content?.state !== "Středočeský kraj" || r.content?.county !== "Příbram");
    if (invalid.length) return reply({ error: "Pre-export V5/published guard failed. No Dropbox upload performed.", exceptions: invalid.map((r: any) => ({ postal_code: r.postal_code, data_version: r.data_version, status: r.status })) }, 409);
    if (facts.length !== 271 || mapRows.length !== 271) return reply({ error: "Unexpected Příbramsko content/map-point counts. No Dropbox upload performed.", fact_count: facts.length, map_point_count: mapRows.length }, 409);

    const source = { platform: "supabase", project_id: "ipnkjcpewtdaikiyzktv", table: "public.postal_codes", environment: "production" };
    const scope = {
      country_codes: ["CZ"], operation: "AUDIT", region: "Středočeský kraj", postcode_group: "26101-26401",
      wave_id: WAVE_ID, predecessor_backup_id: null,
      selection_description: "Exact 36 existing Czech postal-code records in the completed Příbramsko audit scope; not a continuous numeric interval.",
      record_ids: EXPECTED_IDS, postcodes: EXPECTED_CODES, members_complete: true
    };
    const dataVersion = { schema_version: "CZ_V2", content_version: 5 };
    const rowsSorted = [...postalRows].sort((a: any,b: any)=>a.postal_code.localeCompare(b.postal_code));
    const mapsSorted = [...mapRows].sort((a: any,b: any)=>Number(a.postal_id)-Number(b.postal_id)||String(a.fact_id).localeCompare(String(b.fact_id)));
    const bundle = { backup_type: "WORK_WAVE", backup_version: "1.0", backup_id: "pending", created_at: new Date().toISOString(), source, scope, data_version: dataVersion, counts: { postal_codes: rowsSorted.length, facts: facts.length, explorer_map_points: mapsSorted.length, explorer_validation_schemas: schemaRows.length }, postal_codes: rowsSorted, explorer_map_points: mapsSorted, explorer_validation_schemas: schemaRows };
    const canonicalPayload = { source, scope, data_version: dataVersion, postal_codes: rowsSorted, explorer_map_points: mapsSorted, explorer_validation_schemas: schemaRows };
    const scopeHash = await sha256(canonicalBytes(canonicalPayload));
    const dupeParams = new URLSearchParams({ select: "backup_id,status", wave_id: "eq." + WAVE_ID, canonical_scope_hash: "eq." + scopeHash, limit: "1" });
    const prior = await supa("backup_snapshots?" + dupeParams.toString(), serviceKey);
    if (prior.length) return reply({ error: "An identical verified or recorded snapshot already exists for this exact scope fingerprint. No duplicate backup created.", prior_snapshot: prior[0] }, 409);

    const appKey = Deno.env.get("DROPBOX_APP_KEY");
    const appSecret = Deno.env.get("DROPBOX_APP_SECRET");
    const refreshToken = Deno.env.get("DROPBOX_REFRESH_TOKEN");
    if (!appKey || !appSecret || !refreshToken) return reply({ error: "Missing server-side Dropbox configuration. No upload performed." }, 500);
    const tokenResp = await fetch("https://api.dropboxapi.com/oauth2/token", {
      method: "POST",
      headers: { Authorization: "Basic " + btoa(appKey + ":" + appSecret), "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ grant_type: "refresh_token", refresh_token: refreshToken })
    });
    if (!tokenResp.ok) return reply({ error: "Dropbox OAuth refresh failed; no backup uploaded.", http_status: tokenResp.status }, 502);
    const tokenData = await tokenResp.json();
    if (typeof tokenData.access_token !== "string") return reply({ error: "Dropbox returned no access token; no backup uploaded." }, 502);
    const token = tokenData.access_token;

    const stamp = new Date().toISOString().replaceAll(":","-").replaceAll(".","-");
    const backupId = "CZ-AUDIT-PRIBRAMSKO-26101-26401-" + stamp;
    bundle.backup_id = backupId;
    const folderName = "CZ_AUDIT_PRIBRAMSKO_26101-26401_" + stamp;
    const apiFolder = DROPBOX_ROOT + "/" + folderName;
    const displayFolder = DISPLAY_ROOT + "/" + folderName;
    await ensureFolder("/TRAVEL_BACKUP", token);
    await ensureFolder(DROPBOX_ROOT, token);
    await ensureFolder(apiFolder, token);

    const backupBytes = jsonBytes(bundle);
    const objectHash = await sha256(backupBytes);
    const sqlBytes = new TextEncoder().encode(restoreSql(rowsSorted, mapsSorted, schemaRows));
    const jsonFile = await uploadVerified(apiFolder + "/CZ_AUDIT_PRIBRAMSKO_26101-26401_backup.json", backupBytes, token);
    const sqlFile = await uploadVerified(apiFolder + "/CZ_AUDIT_PRIBRAMSKO_26101-26401_restore.sql", sqlBytes, token);
    const manifest = {
      manifest_version: "1.0", backup_id: backupId, backup_type: "WORK_WAVE", created_at: bundle.created_at,
      source, scope, data_version: dataVersion, record_count: rowsSorted.length,
      fingerprint: { algorithm: "SHA-256", canonical_scope_hash: scopeHash, object_sha256: objectHash },
      storage: { provider: "dropbox", path: displayFolder, immutable: true },
      validation: { status: "VERIFIED", structural_validation: true, readback_verified: true, verified_at: new Date().toISOString(), verified_record_count: rowsSorted.length, verified_scope_hash: scopeHash, error: null },
      retention: { class: "WORK_WAVE_HISTORY", delete_after: null }
    };
    const manifestPath = apiFolder + "/manifest.json";
    const manifestFile = await uploadVerified(manifestPath, jsonBytes(manifest), token);
    const manifestReadback = await fetch("https://content.dropboxapi.com/2/files/download", { method: "POST", headers: { Authorization: "Bearer " + token, "Dropbox-API-Arg": JSON.stringify({ path: manifestPath }) } });
    if (!manifestReadback.ok) throw new Error("Manifest read-back failed (" + manifestReadback.status + ").");
    const manifestBytes = new Uint8Array(await manifestReadback.arrayBuffer());
    if (await sha256(manifestBytes) !== manifestFile.sha256) throw new Error("Manifest SHA-256 read-back mismatch.");
    const manifestRead = JSON.parse(new TextDecoder().decode(manifestBytes));
    if (manifestRead.validation?.status !== "VERIFIED" || manifestRead.validation?.readback_verified !== true || manifestRead.validation?.verified_record_count !== 36 || manifestRead.validation?.verified_scope_hash !== scopeHash) throw new Error("Manifest verification fields failed.");

    const registryBody = {
      backup_id: backupId, wave_id: WAVE_ID, backup_type: "WORK_WAVE", status: "VERIFIED",
      source_project_id: "ipnkjcpewtdaikiyzktv", source_table: "public.postal_codes", record_count: 36,
      canonical_scope_hash: scopeHash, object_sha256: objectHash, storage_provider: "dropbox",
      storage_path: displayFolder, manifest_path: displayFolder + "/manifest.json",
      predecessor_backup_id: null,
      validation: { status: "VERIFIED", structural_validation: true, readback_verified: true, verified_at: manifestRead.validation.verified_at, verified_record_count: 36, verified_scope_hash: scopeHash, counts: baseChecks, files: [jsonFile, sqlFile, manifestFile] },
      verified_at: new Date().toISOString()
    };
    const inserted = await supa("backup_snapshots", serviceKey, { method: "POST", headers: { Prefer: "return=representation" }, body: JSON.stringify(registryBody) });
    if (!Array.isArray(inserted) || inserted.length !== 1) throw new Error("Backup verified in Dropbox but operational registry insert did not return exactly one row.");
    const wavePatch = await supa("backup_work_waves?wave_id=eq." + encodeURIComponent(WAVE_ID) + "&status=eq.IN_PROGRESS", serviceKey, {
      method: "PATCH", headers: { Prefer: "return=representation" },
      body: JSON.stringify({ status: "COMPLETE", updated_at: new Date().toISOString(), completed_at: new Date().toISOString(), notes: "Audit PASS; V5/published; immutable JSON + restore SQL + verified manifest read back and registered." })
    });
    if (!Array.isArray(wavePatch) || wavePatch.length !== 1) throw new Error("Snapshot verified and registered, but work-wave completion status update failed; inspect registry before retry.");
    return reply({
      result: "BACKUP_AND_READBACK_VERIFIED", backup_id: backupId, wave_id: WAVE_ID,
      backup_folder: displayFolder, counts: baseChecks,
      canonical_scope_hash: scopeHash, object_sha256: objectHash,
      files: [jsonFile, sqlFile, manifestFile],
      manifest: manifestRead, registry_status: "VERIFIED", work_wave_status: "COMPLETE",
      note: "Exact-scope export only. Dropbox objects were add-only and read back. No unrelated postal rows or map points were read."
    });
  } catch (e) {
    return reply({ error: "Backup stopped. Do not retry blindly; inspect the timestamped Dropbox folder and registry first.", details: String(e) }, 500);
  }
});
