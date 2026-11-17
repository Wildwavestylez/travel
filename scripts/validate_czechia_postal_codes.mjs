#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import Ajv2020 from "ajv/dist/2020.js";
import addFormats from "ajv-formats";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const schema = JSON.parse(fs.readFileSync(path.join(root, "data/czechia/schema.json"), "utf8"));
const arg = (name, fallback) => { const i = process.argv.indexOf(name); return i >= 0 && process.argv[i + 1] ? process.argv[i + 1] : fallback; };
const from = arg("--from", process.env.POSTCODE_FROM || "10000");
const to = arg("--to", process.env.POSTCODE_TO || "15900");
if (!/^\d{5}$/.test(from) || !/^\d{5}$/.test(to) || from > to) throw new Error("Invalid postcode range.");
const base = process.env.SUPABASE_URL?.replace(/\/+$/, "");
const key = process.env.SUPABASE_SECRET_KEY;
if (!base || !key) throw new Error("Missing SUPABASE_URL or SUPABASE_SECRET_KEY GitHub secret.");
const ajv = new Ajv2020({ allErrors: true, strict: false, validateFormats: true });
addFormats(ajv);
const validate = ajv.compile(schema);
async function page(offset) {
  const u = new URL(base + "/rest/v1/postal_codes");
  u.searchParams.set("select", "country_code,postal_code,status,data_version,content");
  u.searchParams.set("country_code", "eq.CZ");
  u.searchParams.set("postal_code", "gte." + from);
  u.searchParams.append("postal_code", "lte." + to);
  u.searchParams.set("order", "postal_code.asc");
  const r = await fetch(u, { headers: { apikey: key, Authorization: "Bearer " + key, Accept: "application/json", Range: offset + "-" + (offset + 499) } });
  if (!r.ok) throw new Error("Supabase REST " + r.status + ": " + (await r.text()).slice(0, 1200));
  return r.json();
}
const rows = [];
for (let offset = 0; ; offset += 500) { const p = await page(offset); rows.push(...p); if (p.length < 500) break; }
const errors = [], seen = new Set();
for (const row of rows) {
  const code = row.postal_code || "(missing)";
  if (seen.has(code)) errors.push({ code, message: "Duplicate postal_code." });
  seen.add(code);
  if (row.country_code !== "CZ") errors.push({ code, message: "country_code must be CZ." });
  if (row.status !== "validated") errors.push({ code, message: "status must be validated; got " + row.status });
  if (!row.content || typeof row.content !== "object" || Array.isArray(row.content)) { errors.push({ code, message: "content must be a JSON object." }); continue; }
  if (row.content.postcode !== code) errors.push({ code, message: "DB postal_code does not match content.postcode." });
  if (!validate(row.content)) for (const e of validate.errors || []) errors.push({ code, message: (e.instancePath || "/") + " " + e.message, keyword: e.keyword, params: e.params });
}
const failed = new Set(errors.map(e => e.code));
const summary = { validator: "AJV 8 + ajv-formats", schema: "data/czechia/schema.json", source: "Supabase public.postal_codes", range: from + "-" + to, records: rows.length, valid_records: rows.length - failed.size, errors: errors.length, result: errors.length === 0 && rows.length > 0 ? "PASS" : "FAIL" };
console.log(JSON.stringify({ summary, errors }, null, 2));
if (process.env.GITHUB_STEP_SUMMARY) {
  const lines = ["## Czechia AJV validation", "", "- Result: " + summary.result, "- Records: " + summary.records, "- Valid records: " + summary.valid_records, "- Errors: " + summary.errors, "- Range: " + summary.range, "- Source: Supabase public.postal_codes", ""];
  if (errors.length) { lines.push("| PSČ | Error |", "|---|---|"); for (const e of errors) lines.push("| " + e.code + " | " + String(e.message).replaceAll("|", "\\|") + " |"); }
  fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, lines.join("\n") + "\n");
}
if (summary.result !== "PASS") process.exit(1);
