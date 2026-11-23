# Italy — data workspace

This directory is the active country-specific workspace for Italy in the TRAVEL / EuropeExplorer data repository.

## Current status

**Active data production and rework.** Italian CAP records are being processed against the country-specific schema, content standard and operational prompts. The production records are stored in the Neon database.

- The Italian CAP inventory and processing order are maintained in `sequence.json`.
- The current sequence contains **4,735 unique CAP codes**, beginning at `00010`.
- The sequence is an inventory-based processing order. Its source note records that the inventory is provisional and is not an official Poste Italiane certification.
- `schema.json`, `CONTENT_STANDARD.md` and `prompt_rework.md` define the current record structure and rework requirements.
- `prompt_audit.md` and `prompt_create.md` define the audit and creation workflows where present in this workspace.
- Neon is the production database; repository documents define the rules and workflow.

## Country data and workflow

- One Italian CAP is one production unit / record.
- Preserve the shared separation between country profile, schema, content standard and operational prompts.
- Use verified Italian administrative and postal sources; do not mechanically copy Czech or German administrative meanings.
- Keep administrative hierarchy distinct from postal geography: CAP-to-Comune relationships must be researched and represented accurately, including many-to-many cases where they occur.
- Represent Regione, Provincia / Città Metropolitana, Comune and CAP consistently so application search and filters can navigate the hierarchy.
- Follow `sequence.json` as the authoritative processing order. Do not invent a parallel order or skip listed CAP codes without recording the reason.
- Validate every record against `schema.json` and `CONTENT_STANDARD.md` before advancing its workflow status.
- Do not mark a record as published unless it has completed the required production and audit workflow.

## Inventory source and limitations

The current inventory is based on **Italian Cities v2.0.0 — GeoNames Postal Codes IT (snapshot 2026-07-30) + ISTAT municipalities (2026-02-21)**, with the source and attribution recorded in `sequence.json`.

GeoNames is not Poste Italiane and does not certify official postal assignments. Treat the sequence as the working CAP inventory; verify missing, ambiguous or conflicting CAP-to-locality relationships during the relevant provincial audits. The sequence deduplicates CAP values nationally, while province groups may preserve the same CAP in more than one locality group.

## Maintenance rule

Keep this README synchronized with the actual repository and database state. Describe existing files, active workflows and verified data as they are; do not leave obsolete preparation or planning statements in place after implementation.
