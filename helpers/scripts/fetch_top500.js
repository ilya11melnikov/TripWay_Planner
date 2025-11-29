const axios = require('axios');
const fs = require('fs');
const path = require('path');

const API_KEY = process.env.OPENTRIPMAP_KEY || process.env.OPENTRIPMAP_API_KEY;
if (!API_KEY) {
  console.error('Set OPENTRIPMAP_KEY environment variable to use this script.');
  console.error('You can get a key from https://opentripmap.io/');
  process.exit(1);
}

const repoRoot = path.resolve(__dirname, '../..');
const OUT_FILE = path.join(repoRoot, 'data', 'top500.json');
const TARGET = 500;
const LIMIT_PER_REQUEST = 100;

const cities = [
  { name: 'Paris', lat: 48.8566, lon: 2.3522 },
  { name: 'Rome', lat: 41.9028, lon: 12.4964 },
  { name: 'London', lat: 51.5074, lon: -0.1278 },
  { name: 'New York', lat: 40.7128, lon: -74.0060 },
  { name: 'Tokyo', lat: 35.6895, lon: 139.6917 },
  { name: 'Barcelona', lat: 41.3851, lon: 2.1734 },
  { name: 'Istanbul', lat: 41.0082, lon: 28.9784 },
  { name: 'Moscow', lat: 55.7558, lon: 37.6173 },
  { name: 'Prague', lat: 50.0755, lon: 14.4378 },
  { name: 'Amsterdam', lat: 52.3676, lon: 4.9041 }
];

async function fetchPlacesForCity(city) {
  const url = `https://api.opentripmap.com/0.1/en/places/radius`;
  const params = {
    apikey: API_KEY,
    radius: 10000,
    lon: city.lon,
    lat: city.lat,
    limit: LIMIT_PER_REQUEST,
    rate: 3
  };
  const res = await axios.get(url, { params });
  return res.data.features || [];
}

async function fetchPlaceDetails(xid) {
  const url = `https://api.opentripmap.com/0.1/en/places/xid/${xid}`;
  const res = await axios.get(url, { params: { apikey: API_KEY } });
  return res.data;
}

async function main() {
  const map = new Map();
  for (const city of cities) {
    if (map.size >= TARGET) break;
    console.log('Fetching for', city.name);
    try {
      const features = await fetchPlacesForCity(city);
      for (const f of features) {
        if (map.size >= TARGET) break;
        const xid = f.properties && f.properties.xid;
        if (!xid) continue;
        if (map.has(xid)) continue;
        try {
          const details = await fetchPlaceDetails(xid);
          map.set(xid, {
            xid,
            name: details.name || f.properties.name || '',
            kinds: details.kinds || f.properties.kinds || '',
            wikipedia: details.wikipedia || null,
            info: details.info || {},
            point: details.point || (f.geometry && f.geometry.coordinates) || null
          });
          console.log('Added', details.name || xid);
        } catch (err) {
          console.warn('Detail fetch failed for', xid, err.message);
        }
      }
    } catch (err) {
      console.warn('Request failed for', city.name, err.message);
    }
  }

  const arr = Array.from(map.values()).slice(0, TARGET);
  fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
  fs.writeFileSync(OUT_FILE, JSON.stringify(arr, null, 2), 'utf8');
  console.log(`Saved ${arr.length} places to`, OUT_FILE);
}

if (require.main === module) main().catch(err => {
  console.error(err && err.message || err);
  process.exit(1);
});
