// Downloads every Squarespace-hosted photo referenced in lib/data.ts into
// public/images/ and rewrites lib/data.ts to use the local copies.
// Run once, BEFORE you cancel Squarespace:   npm run fetch-images
import fs from 'node:fs/promises';
import path from 'node:path';

const CDN = 'https://images.squarespace-cdn.com/content/v1/62d32b1806c05f1e0770e163/';
const DATA = path.join(process.cwd(), 'lib', 'data.ts');
const OUT = path.join(process.cwd(), 'public', 'images');

let src = await fs.readFile(DATA, 'utf8');
const refs = [...new Set([...src.matchAll(/img\('([0-9a-f-]{36}\/[^']+)'/g)].map((m) => m[1]))];
await fs.mkdir(OUT, { recursive: true });

for (const ref of refs) {
  const [id, file] = ref.split('/');
  const name = `${id.slice(0, 8)}-${decodeURIComponent(file).replace(/[^a-zA-Z0-9._-]+/g, '-')}`;
  const res = await fetch(`${CDN}${ref}?format=2500w`);
  if (!res.ok) { console.warn(`✗ ${ref} (${res.status}) — left on Squarespace`); continue; }
  await fs.writeFile(path.join(OUT, name), Buffer.from(await res.arrayBuffer()));
  src = src.split(`img('${ref}'`).join(`img('/images/${name}'`);
  console.log(`✓ ${name}`);
}
await fs.writeFile(DATA, src);
console.log(`\nDone. ${refs.length} photos processed; lib/data.ts now points to /public/images.`);
