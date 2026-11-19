import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const sequencePath = path.join(root, 'data/slovakia/sequence.json')
const recordsDir = path.join(root, 'data/slovakia/records')
const outputPath = path.join(root, 'data/slovakia/explorer_index.json')
const tilesDir = path.join(root, 'data/slovakia/explorer_tiles')
const TILE_ZOOMS = [4, 5, 6, 7, 8]
const RANDOM_TILE_ZOOM = 8

const sequenceFile = JSON.parse(fs.readFileSync(sequencePath, 'utf8'))
if (!Array.isArray(sequenceFile.sequence) || sequenceFile.count !== sequenceFile.sequence.length) {
  throw new Error('Slovak sequence.json has an invalid count or sequence.')
}

const seen = new Set()
const records = []
const tiles = new Map()
const randomTileCounts = new Map()

function validCoordinate(value, min, max) {
  return typeof value === 'number' && Number.isFinite(value) && value >= min && value <= max
}

function lonToTileX(lon, zoom) {
  return Math.max(0, Math.min(2 ** zoom - 1, Math.floor((lon + 180) / 360 * 2 ** zoom)))
}

function latToTileY(lat, zoom) {
  const bounded = Math.max(-85.05112878, Math.min(85.05112878, lat))
  const radians = bounded * Math.PI / 180
  const value = (1 - Math.asinh(Math.tan(radians)) / Math.PI) / 2 * 2 ** zoom
  return Math.max(0, Math.min(2 ** zoom - 1, Math.floor(value)))
}

for (const postcode of sequenceFile.sequence) {
  if (typeof postcode !== 'string' || !/^\d{5}$/.test(postcode) || seen.has(postcode)) {
    throw new Error(`Invalid or duplicate postcode in Slovak sequence: ${postcode}`)
  }
  seen.add(postcode)

  const filePath = path.join(recordsDir, `${postcode}.json`)
  if (!fs.existsSync(filePath)) throw new Error(`Missing canonical Slovak record: ${filePath}`)
  const record = JSON.parse(fs.readFileSync(filePath, 'utf8'))
  if (record.postcode !== postcode) throw new Error(`Postcode mismatch in ${filePath}`)
  if (!['placeholder', 'validated', 'published'].includes(record.status)) {
    throw new Error(`Invalid lifecycle status in ${filePath}: ${record.status}`)
  }
  if (record.status !== 'published') continue
  if (record.data_version !== 5) {
    throw new Error(`Published Slovak record ${postcode} is not data_version 5; refusing to index it.`)
  }
  if (typeof record.city !== 'string' || !record.city.trim()
    || !Array.isArray(record.facts) || record.facts.length === 0
    || !record.representative_point
    || !validCoordinate(record.representative_point.lat, -90, 90)
    || !validCoordinate(record.representative_point.lon, -180, 180)) {
    throw new Error(`Published V5 Slovak record ${postcode} is missing required Explorer fields.`)
  }

  const translations = record.translations || {}
  for (const language of ['cs', 'de', 'en', 'es', 'fr', 'it', 'nl']) {
    if (!translations[language] || !Array.isArray(translations[language].facts)) {
      throw new Error(`Published V5 Slovak record ${postcode} is missing translations.${language}.facts`)
    }
  }

  records.push({
    postcode,
    city: record.city,
    district: record.district ?? null,
    county: record.county ?? null,
    state: record.state ?? null,
    representative_point: record.representative_point,
    status: 'published',
    data_version: 5,
  })

  for (const fact of record.facts) {
    if (!fact || typeof fact.id !== 'string' || !fact.id
      || typeof fact.title !== 'string' || !fact.title.trim()
      || typeof fact.category !== 'string' || !fact.category
      || typeof fact.map_category !== 'string' || !fact.map_category) {
      throw new Error(`Published V5 Slovak record ${postcode} contains an incomplete fact.`)
    }
    if (fact.location == null) continue
    const location = fact.location
    if (!validCoordinate(location.lat, -90, 90) || !validCoordinate(location.lon, -180, 180)) {
      throw new Error(`Published V5 Slovak fact ${postcode}/${fact.id} has invalid coordinates.`)
    }

    const point = {
      postcode,
      city: record.city,
      fact_id: fact.id,
      title: fact.title,
      category: fact.category,
      map_category: fact.map_category,
      lat: location.lat,
      lon: location.lon,
    }

    for (const zoom of TILE_ZOOMS) {
      const x = lonToTileX(location.lon, zoom)
      const y = latToTileY(location.lat, zoom)
      const key = `${zoom}/${x}/${y}`
      if (!tiles.has(key)) tiles.set(key, [])
      tiles.get(key).push(point)
      if (zoom === RANDOM_TILE_ZOOM) {
        randomTileCounts.set(key, (randomTileCounts.get(key) || 0) + 1)
      }
    }
  }
}

// Tiles are generated artifacts. Rebuild the directory from canonical records
// so removed/unpublished facts cannot remain publicly discoverable.
fs.rmSync(tilesDir, { recursive: true, force: true })
for (const [key, points] of tiles) {
  const [zoom, x, y] = key.split('/')
  const tilePath = path.join(tilesDir, zoom, x, `${y}.json`)
  fs.mkdirSync(path.dirname(tilePath), { recursive: true })
  fs.writeFileSync(tilePath, JSON.stringify(points) + '\n', 'utf8')
}

const manifest = {
  country_code: 'SK',
  data_version: 5,
  status: 'published',
  source_of_truth: 'data/slovakia/records/{postcode}.json',
  generated_from: 'Canonical Slovak record JSON files; include only records with data_version 5 and status published',
  count: records.length,
  map_point_count: [...randomTileCounts.values()].reduce((sum, count) => sum + count, 0),
  records,
  tile_zooms: TILE_ZOOMS,
  tile_keys: [...tiles.keys()].sort(),
  random_tiles: [...randomTileCounts.entries()].map(([key, count]) => ({ key, count })),
}

fs.writeFileSync(outputPath, JSON.stringify(manifest, null, 2) + '\n', 'utf8')
console.log(`Slovak Explorer index rebuilt: ${records.length} published V5 records, ${manifest.map_point_count} fact map points in ${tiles.size} occupied tiles.`)
