import assert from 'node:assert/strict';
import { readFileSync, statSync } from 'node:fs';

const output = new URL('../dist/', import.meta.url);
const rawBase = process.argv[2] || '/';
const base = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;
assert(base.startsWith('/') && !base.startsWith('//'), 'Use an absolute URL path for the base.');
const site = new URL(base, 'https://documentation.invalid');
assert.equal(site.pathname, base, 'The base must be a URL path without a query or fragment.');

const index = readFileSync(new URL('index.html', output), 'utf8');
assert.match(index, /id="likec4-root"/, 'The diagram application must be present.');
assert.equal(
  readFileSync(new URL('404.html', output), 'utf8'),
  index,
  'GitHub Pages needs the application as its 404 fallback for direct diagram links.',
);

let checkedAssets = 0;
for (const [, reference] of index.matchAll(/(?:src|href)="([^"]+)"/g)) {
  const asset = new URL(reference, site);
  if (asset.origin !== site.origin) continue;
  assert(asset.pathname.startsWith(base), `Asset escapes the publication base: ${reference}`);
  const relativePath = asset.pathname.slice(base.length);
  const file = statSync(new URL(relativePath, output));
  assert(file.isFile() && file.size > 0, `Missing or empty asset: ${reference}`);
  checkedAssets++;
}
assert(checkedAssets > 0, 'The site must reference generated assets.');
assert(statSync(new URL('likec4-views.js', output)).size > 0, 'The embeddable diagrams must exist.');
assert(statSync(new URL('.nojekyll', output)).isFile(), 'The output must be served as a static site.');
assert.deepEqual(
  readFileSync(new URL('favicon.ico', output)),
  readFileSync(new URL('../public/favicon.ico', import.meta.url)),
  'The existing favicon must be preserved.',
);
assert.equal(
  readFileSync(new URL('robots.txt', output), 'utf8').replaceAll('\r\n', '\n'),
  'User-agent: *\nAllow: /\n',
  'Public documentation must allow crawling.',
);

console.log(`Verified ${checkedAssets} assets at ${base}, diagram embedding, deep-link fallback, and public crawling.`);
