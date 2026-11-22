-- TRAVEL operational backup registry (minimal, exact-scope).
-- Applied to Supabase project ipnkjcpewtdaikiyzktv on 2026-11-22.
-- No existing application tables, RLS policies, triggers, or indexes are changed.
CREATE TABLE IF NOT EXISTS public.backup_work_waves (
  wave_id text PRIMARY KEY,
  country_code text NOT NULL CHECK (country_code ~ '^[A-Z]{2}$'),
  operation text NOT NULL CHECK (operation IN ('REWORK','AUDIT','CORRECTION','IMPORT','MANUAL')),
  region text,
  postcode_group text,
  status text NOT NULL CHECK (status IN ('OPEN','IN_PROGRESS','AWAITING_VALIDATION','SNAPSHOT_VERIFIED','COMPLETE','FAILED','SUPERSEDED')),
  target_record_ids bigint[] NOT NULL,
  target_postcodes text[] NOT NULL,
  members_complete boolean NOT NULL DEFAULT false,
  schema_version text NOT NULL,
  content_version text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  completed_at timestamptz,
  notes text,
  CONSTRAINT backup_work_waves_member_count_match CHECK (cardinality(target_record_ids) = cardinality(target_postcodes)),
  CONSTRAINT backup_work_waves_nonempty_members CHECK (cardinality(target_record_ids) > 0)
);

CREATE TABLE IF NOT EXISTS public.backup_snapshots (
  backup_id text PRIMARY KEY,
  wave_id text NOT NULL REFERENCES public.backup_work_waves(wave_id),
  backup_type text NOT NULL CHECK (backup_type IN ('WORK_WAVE','MANUAL','FULL_DATABASE')),
  status text NOT NULL CHECK (status IN ('PENDING','VERIFIED','FAILED','SUPERSEDED')),
  source_project_id text NOT NULL,
  source_table text NOT NULL,
  record_count integer NOT NULL CHECK (record_count >= 0),
  canonical_scope_hash text NOT NULL CHECK (canonical_scope_hash ~ '^[a-fA-F0-9]{64}$'),
  object_sha256 text CHECK (object_sha256 IS NULL OR object_sha256 ~ '^[a-fA-F0-9]{64}$'),
  storage_provider text NOT NULL DEFAULT 'dropbox' CHECK (storage_provider = 'dropbox'),
  storage_path text NOT NULL,
  manifest_path text NOT NULL,
  predecessor_backup_id text REFERENCES public.backup_snapshots(backup_id),
  validation jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  verified_at timestamptz,
  CONSTRAINT backup_snapshots_unique_wave_fingerprint UNIQUE (wave_id, canonical_scope_hash)
);

CREATE INDEX IF NOT EXISTS backup_snapshots_wave_created_idx
  ON public.backup_snapshots (wave_id, created_at DESC);

ALTER TABLE public.backup_work_waves ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.backup_snapshots ENABLE ROW LEVEL SECURITY;

REVOKE ALL ON TABLE public.backup_work_waves FROM anon, authenticated;
REVOKE ALL ON TABLE public.backup_snapshots FROM anon, authenticated;
GRANT ALL ON TABLE public.backup_work_waves TO service_role;
GRANT ALL ON TABLE public.backup_snapshots TO service_role;

COMMENT ON TABLE public.backup_work_waves IS
  'Operational registry of exact-scope TRAVEL work waves. Service-role access only.';
COMMENT ON TABLE public.backup_snapshots IS
  'Immutable backup snapshot registry; rows are recorded only after verified Dropbox read-back. Service-role access only.';
