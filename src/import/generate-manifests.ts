import { Glob } from 'bun'
import path from 'path';

main().catch(console.error);
async function main() {
  await generateChapterManifest();
}
async function generateChapterManifest() {
  const glob = new Glob('**/*.json');
  const chapterPaths : string[] = [];
  for await (const filepath of glob.scan(`${import.meta.dir}/../../data/chapters`)) {
    if (filepath === 'chapter-manifest.json') {
      continue;
    }
    chapterPaths.push(filepath);
  }
  const sorted = chapterPaths.toSorted((a, b) =>
    a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' })
  );
  const manifest = sorted.map(dataPath => ({
    dataPath,
    chapterOsisID: path.basename(dataPath).replace('.json',''),
  }));

  const file = Bun.file(`${import.meta.dir}/../../data/chapters/chapter-manifest.json`);
  await file.write(JSON.stringify(manifest, null, 2));
  console.log(`Wrote ${manifest.length} chapter paths to chapter-manifest.json in ${file.size} bytes`)
}
