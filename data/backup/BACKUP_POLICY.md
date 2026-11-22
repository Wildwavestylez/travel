# TRAVEL — Backup & Production History Policy

**Status:** Approved architecture specification  
**Scope:** All TRAVEL postcode datasets, currently Germany (DE) and Czechia (CZ), and future countries.  
**This document defines the required behaviour. It does not by itself deploy or activate scheduled backups.**

## 1. System of record and responsibilities

- **GitHub (`Wildwavestylez/travel`)** — canonical version-controlled specification, schemas, scripts and reviewable changes.
- **Supabase** — operational registry of backup scopes, completed work waves, source-row fingerprints and backup run status.
- **Dropbox** — storage for immutable backup objects and verified restore points.
- **Supabase Edge Functions / scheduled jobs** — execution layer for backup, verification and controlled restore.

Credentials and tokens must remain in Supabase secrets or an equivalent secret manager. Never commit credentials, access tokens, run keys or service-role keys to GitHub or backup manifests.

## 2. Backup layers

### 2.1 Full database backup
- A scheduled full backup is intended to run daily at 02:00 (project operating timezone must be explicitly configured and documented before activation).
- It captures the complete agreed production dataset, not just records marked as recently worked.
- Full backups are independent of work-wave snapshots. A completed audit does not exempt its records from the daily full backup.
- Each run gets a unique timestamped object name. Existing verified objects are never silently overwritten.
- Retention target: 30 daily restore points plus monthly archives. Retention/deletion automation must not be enabled until restore tests and retention rules are approved.

### 2.2 Work-wave snapshots
Create a separately identifiable snapshot when a defined rework, audit, correction, import or other approved batch is completed.
Each snapshot must identify the exact records included, not merely a broad city or postcode prefix.
A work-wave snapshot is immutable. A later change creates a new version; it never replaces the earlier verified snapshot.

### 2.3 Manual snapshots
A manual snapshot can be requested at any time, especially before bulk imports, SQL changes, migrations or large rework operations. It must use the same validation and manifest rules.

## 3. Work-wave identity and naming

Every work wave must be explicitly opened with:
- country code (for example `DE`, `CZ`);
- operation type (`REWORK`, `AUDIT`, `CORRECTION`, `IMPORT`, or another documented type);
- human-readable region/city where applicable;
- postcode group/range where applicable;
- unique `wave_id`;
- exact target record identifiers and postcode values, or a reproducible, reviewed selection definition;
- intended source/data version and operator/context.

Suggested identifiers:
- `DE-REWORK-HAMBURG-001`
- `DE-REWORK-01XXX-002`
- `CZ-REWORK-PRAHA-001`
- `DE-AUDIT-BERLIN-10XXX-001`
- `DE-AUDIT-KARLSRUHE-001`

These are examples only. Do not infer that any example wave has actually been completed.

A wave is not marked complete merely because work was attempted. Completion requires validation, a successful immutable snapshot, and a registry update.

## 4. Avoiding duplicate work-wave backups

The registry tracks the exact scope and the fingerprint of the data that was successfully backed up.

- If the exact same scope has the same verified fingerprint, do not create another identical work-wave snapshot.
- If one or more records are added, removed, or changed, create a new snapshot/version for the changed scope and record the relationship to the prior version.
- A completed audit/rework label is historical metadata, not proof that the current live data is unchanged or still valid.
- New records must never inherit an audited/completed status solely because they share a city or postcode prefix with previously audited records.
- Scope membership is based on stable row IDs plus postcode and country identity. The manifest must record the exact members.
- Deletions and removals must be represented explicitly (tombstones/change records) so that a restore or comparison can distinguish deletion from omission.
- Never deduplicate or skip the independent daily full backup because a work-wave snapshot exists.

The comparison should use deterministic canonical serialization and SHA-256 (or a documented stronger standard). Include schema/data-version context in the fingerprint so incompatible representations are not treated as identical.

## 5. Manifest and registry requirements

Each backup object must have a manifest conforming to `backup_manifest.schema.json`. At minimum it records:
- backup ID, type, timestamp and format;
- country, operation, region and postcode group when relevant;
- wave ID and predecessor snapshot when relevant;
- exact record count and exact record membership;
- source table/project identity (without secrets);
- schema/data version;
- canonical content fingerprint and object checksum;
- validation results and read-back verification status;
- storage path and restore eligibility.

The operational registry in Supabase tracks the latest verified snapshot per exact scope, historical versions, wave state and last successful full backup. The JSON file `backup_registry.json` in this repository is a schema-aligned bootstrap/example registry only; it is not the live operational registry.

## 6. Verification requirements

A backup is **VERIFIED** only after:
1. source selection and scope membership have been validated;
2. exported data passes structural and content validation;
3. the object is uploaded without overwriting an existing object;
4. the uploaded object is read back from Dropbox;
5. read-back count, scope, canonical fingerprint and checksum match the export;
6. the registry is updated only after all preceding checks pass.

Failed or incomplete runs must be marked failed/unverified and must not advance the last-verified pointer.

## 7. Restore safety

- Restore is a separate, explicitly authorized operation; scheduled backups never restore data automatically.
- Before a restore, validate the selected backup, exact target IDs, country, postcode, schema version and current live-state preconditions.
- Prefer restoring into staging or a temporary table first.
- Production writes must be narrowly scoped to exact approved IDs and fields, with explicit preconditions and a returned-row count check.
- Never use an unbounded `UPDATE ... FROM`, missing join predicate, or broad update as a restore mechanism.
- Preserve the source backup and record a restore event, operator approval, target IDs, fields changed and post-restore verification.
- If preconditions do not match, stop without writing.

## 8. Retention and immutability

- Work-wave snapshots are historical restore points and are not overwritten by later versions.
- Full-backup retention is separate from work-wave history.
- No automatic deletion/rotation is permitted until the retention implementation has been tested and explicitly approved.
- Dropbox upload mode must be add-only for immutable snapshots. Any replacement workflow requires explicit versioning and review.

## 9. Operational statuses

Use explicit statuses, not ambiguous labels:
- `OPEN` — work wave registered, work not complete.
- `IN_PROGRESS` — work underway.
- `AWAITING_VALIDATION` — work finished, checks pending.
- `SNAPSHOT_VERIFIED` — immutable snapshot read back and verified.
- `COMPLETE` — snapshot verified and registry finalized.
- `FAILED` — validation or backup failed; no completion claim.
- `SUPERSEDED` — a newer version exists; historical snapshot remains retained.

An audit/rework outcome and a backup verification status are separate fields.

## 10. Activation checklist

Before enabling the daily schedule:
- confirm the exact production tables and included columns;
- confirm project timezone and 02:00 schedule;
- implement and test the full-database export (including pagination/size handling);
- implement Supabase registry tables and access controls;
- implement deterministic fingerprints and Dropbox add-only uploads;
- test read-back verification;
- test restore into a safe target and document the production restore gate;
- confirm Dropbox retention and available storage;
- configure failure alerts and a visible last-successful-backup status.

**Important:** The successful three-record Prague backup/restore test proves that narrow export, Dropbox read-back and controlled restoration can work. It does not yet prove that full-database scheduled backup, registry automation, retention or alerting are deployed.


## 11. Operational registry implementation

The initial Supabase operational registry uses two narrowly scoped tables:

- `public.backup_work_waves` — one row per explicitly opened work wave; stores country, operation, human-readable scope, exact stable record IDs, exact postcodes, schema/content version and lifecycle status.
- `public.backup_snapshots` — immutable history of generated snapshots; stores the work-wave reference, exact record count, canonical scope SHA-256, object SHA-256, Dropbox paths, predecessor reference and verification evidence.

Both tables have Row Level Security enabled. Direct privileges are revoked from `anon` and `authenticated`; the backup Edge Functions use the existing server-side `service_role` secret. The only secondary index is the work-wave/history lookup on `backup_snapshots(wave_id, created_at DESC)`. Do not add broad indexes, public policies or client-side access without a separately reviewed requirement.

The first deployed implementation migration is `data/backup/migrations/20261122_create_backup_work_wave_registry.sql`. A work-wave row is created with exact membership before export. A snapshot row is inserted only after the JSON object, restore SQL and manifest have each been uploaded add-only and downloaded again for SHA-256 verification. The work wave is marked `COMPLETE` only after the verified snapshot has been recorded.

The dedicated Příbramsko implementation is `supabase/functions/travel-backup-cz-26101-26401-pribramsko/index.ts`. Its live invocation key is deliberately not committed. The function has a fixed 36-record allowlist, performs a read-only preview before export, reads only those postal rows and their linked map points plus the CZ schema, and refuses to export unless every record is V5 + published. It is a scoped work-wave exporter, not a full-database backup or restore executor.

This implementation does not activate the daily full-backup schedule, retention/deletion, automatic restore, alerts, or read-only database locking. Those remain separate deployment and approval tasks.
