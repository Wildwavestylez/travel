# TRAVEL — Restore Policy

**Status:** Mandatory safety policy for production restoration.

## 1. Authorization
A restore to production requires an explicit user instruction naming the intended backup/scope and approving the target operation. A successful backup does not grant permission to restore.

## 2. Pre-restore checks
Before any write:
1. Fetch the exact immutable backup object and its manifest from Dropbox.
2. Validate manifest schema, backup identity, country, source project/table and verified status.
3. Verify the object checksum and canonical scope fingerprint.
4. Validate exact record IDs, country codes and postcode values.
5. Compare the live rows against the expected preconditions captured for this restore.
6. List the exact fields that will be restored and the exact rows that will be affected.
7. Prefer a staging/temporary restore and compare it before production.

If any check fails or a row is unexpected, stop without modifying production.

## 3. Production write rules
- Use explicit stable IDs and explicit country/postcode predicates.
- Include expected current values or fingerprints as write preconditions.
- Update only approved columns; do not replace unrelated metadata.
- Never issue a broad update or an UPDATE ... FROM without a complete, reviewed join predicate.
- Require returned row count to equal the approved target count.
- If the count differs, stop and investigate; do not continue with a wider query.

## 4. Post-restore verification
Re-read the exact target rows and compare their restored fields, counts and fingerprints with the selected backup. Record the restore event, backup ID, operator approval, target IDs, changed columns, timestamps and verification outcome in the operational registry.

## 5. Recovery point protection
Never overwrite or delete the source backup during restoration. A restore is itself a significant operation and should be followed by a new verified full backup or an explicitly scoped post-restore snapshot.

## 6. Scope
These rules apply to all countries and all production postcode data. The successful Prague three-row test is a reference test case, not permission to reuse its target IDs or predicates for other operations.
