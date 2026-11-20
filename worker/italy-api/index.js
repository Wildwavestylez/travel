import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);
const token = process.env.TRAVEL_DATABASE_TOKEN;

const cors = origin => ({
  'content-type': 'application/json; charset=utf-8',
  'cache-control': 'no-store',
  'access-control-allow-origin': origin || '*',
  'access-control-allow-methods': 'GET, OPTIONS',
  'access-control-allow-headers': 'authorization, content-type',
  'vary': 'Origin'
});
const reply = (data, status = 200, origin = '*') =>
  new Response(JSON.stringify(data), { status, headers: cors(origin) });

export default {
  async fetch(request) {
    const origin = request.headers.get('origin') || '*';
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: { ...cors(origin), 'access-control-max-age': '86400' } });
    }
    if (request.method !== 'GET') return reply({ error: 'Method not allowed' }, 405, origin);
    if (!token || request.headers.get('authorization') !== `Bearer ${token}`) {
      return reply({ error: 'Unauthorized' }, 401, origin);
    }

    const url = new URL(request.url);
    try {
      if (url.pathname === '/health') {
        const rows = await sql`SELECT 1 AS ok`;
        return reply({ ok: rows[0]?.ok === 1, service: 'travel-italy-api' }, 200, origin);
      }

      if (url.pathname === '/api/italy/caps') {
        const limit = Math.min(100, Math.max(1, Number.parseInt(url.searchParams.get('limit') || '60', 10) || 60));
        const offset = Math.max(0, Number.parseInt(url.searchParams.get('offset') || '0', 10) || 0);
        const q = (url.searchParams.get('q') || '').trim().slice(0, 100);
        const status = url.searchParams.get('status') || 'all';
        if (!['all', 'inventory', 'researching', 'review', 'published'].includes(status)) {
          return reply({ error: 'Invalid status filter' }, 400, origin);
        }

        const count = await sql`
          SELECT count(*)::int AS total
          FROM public.italy_cap_records
          WHERE (${q} = '' OR postcode LIKE ${q + '%'}
            OR COALESCE(record->>'city', '') ILIKE ${'%' + q + '%'})
            AND (${status} = 'all' OR workflow_status = ${status})
        `;
        const rows = await sql`
          SELECT postcode, workflow_status, (record IS NOT NULL) AS has_record,
            COALESCE(record->>'city', '') AS city, updated_at
          FROM public.italy_cap_records
          WHERE (${q} = '' OR postcode LIKE ${q + '%'}
            OR COALESCE(record->>'city', '') ILIKE ${'%' + q + '%'})
            AND (${status} = 'all' OR workflow_status = ${status})
          ORDER BY postcode ASC LIMIT ${limit} OFFSET ${offset}
        `;
        return reply({ country: 'IT', total: count[0].total, limit, offset, q, status, rows }, 200, origin);
      }

      const match = url.pathname.match(/^\/api\/italy\/caps\/(\d{5})$/);
      if (match) {
        const rows = await sql`
          SELECT postcode, workflow_status, record, created_at, updated_at
          FROM public.italy_cap_records WHERE postcode = ${match[1]} LIMIT 1
        `;
        if (!rows.length) return reply({ error: 'CAP not found' }, 404, origin);
        return reply(rows[0], 200, origin);
      }
      return reply({ error: 'Not found' }, 404, origin);
    } catch (error) {
      console.error('Italy API error', error?.message || error);
      return reply({ error: 'Internal server error' }, 500, origin);
    }
  }
};
