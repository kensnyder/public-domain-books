import { Glob } from 'bun'
import path from 'path';

type ManifestFormat = {
  dataPath: string;
  workOsisID: string;
  chapterOsisID: string;
  modelId: string;
  createdAt: string;
}

main().catch(console.error);
async function main() {
  await generateChapterManifest();
}
async function generateChapterManifest() {
  const glob = new Glob('**/*.json');
  const baseDir = `${import.meta.dir}/../../data/chapters`;
  const manifest : ManifestFormat[] = [];
  for await (const dataPath of glob.scan(baseDir)) {
    if (dataPath === 'chapter-manifest.json') {
      continue;
    }
    const dataFile = Bun.file(`${baseDir}/${dataPath}`);
    const dataContents = await dataFile.json();
    const createdAt = new Date(dataContents.createdAt);
    manifest.push({
      dataPath,
      workOsisID: dataPath.split('/').shift() || '',
      chapterOsisID: path.basename(dataPath).replace('.json',''),
      modelId: dataContents.modelId,
      createdAt: createdAt.toISOString(),
    });
  }
   manifest.sort((a, b) => {
    const aWorkChapter = `${a.workOsisID}.${a.chapterOsisID}`;
    const bWorkChapter = `${b.workOsisID}.${b.chapterOsisID}`;
    return aWorkChapter.localeCompare(bWorkChapter, undefined, { numeric: true, sensitivity: 'base' })
  });

  const file = Bun.file(`${import.meta.dir}/../../data/chapters/chapter-manifest.json`);
  await file.write(JSON.stringify(manifest, null, 2));
  console.log(`Wrote ${manifest.length} chapter paths to chapter-manifest.json in ${file.size} bytes`)
}
