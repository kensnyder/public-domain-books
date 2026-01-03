import { Glob } from 'bun';
import {ManifestShape} from "../../src/types/data-shapes";

main().catch(console.error);
async function main() {
  const manifest: ManifestShape = {
    works: {
      dataPath: 'data/compiled/works.json',
    },
    books: {
      dataPath: 'data/compiled/books.json',
    },
    verses: await getVerses(),
    analysis: await getAnalysisFiles(),
    crossReferences: await getCrossReferences(),
    geocoding: [],
    maps: [],
    artwork: [],
    commentaries: await getCommentaries(),
    dictionaries: [],
  };
  const file = Bun.file(`${import.meta.dir}/../../data/compiled/manifest.json`);
  await file.write(JSON.stringify(manifest, null, 2));
  console.log(
    `Wrote ${file.size.toLocaleString()} bytes to data/compiled/manifest.json`,
  );
}

async function getCrossReferences() {
  const xrs: ManifestShape['crossReferences'] = [];
  const glob = new Glob('*.json');
  const baseDir = `${import.meta.dir}/../../data/crossReferences`;
  for await (const dataPath of glob.scan(baseDir)) {
    const workOsisID = dataPath.replace('.json', '');
    const file = Bun.file(`${baseDir}/${dataPath}`);
    const data = await file.json();
    const date = data.date;
    const license = data.licence;
    xrs.push({
      dataPath: `data/crossReferences/${dataPath}`,
      workOsisID,
      date,
      license,
    });
  }
  return xrs;
}

async function getVerses() {
  const verses: ManifestShape['verses'] = [];
  const glob = new Glob('*.json');
  const baseDir = `${import.meta.dir}/../../data/verses`;
  for await (const dataPath of glob.scan(baseDir)) {
    const workOsisID = dataPath.replace('.json', '');
    const file = Bun.file(`${baseDir}/${dataPath}`);
    const data = await file.json();
    verses.push({
      dataPath: `data/verses/${dataPath}`,
      workOsisID,
      compiledAt: data.compiledAt,
    });
  }
  return verses;
}

async function getCommentaries() {
  const commentaries: ManifestShape['commentaries'] = [];
  const glob = new Glob('**/*.json');
  const baseDir = `${import.meta.dir}/../../data/commentaries`;
  for await (const dataPath of glob.scan(baseDir)) {
    const workOsisID = 'KJV';
    const [commentaryID, bookOsisID] = dataPath.split(/[/.]/);
    const file = Bun.file(`${baseDir}/${dataPath}`);
    const data = await file.json();
    commentaries.push({
      dataPath: `data/commentaries/${dataPath}`,
      workOsisID,
      commentaryID,
      bookOsisID,
      compiledAt: data.importedAt,
    });
  }
  return commentaries;
}

async function getAnalysisFiles() {
  const glob = new Glob('**/*.json');
  const baseDir = `${import.meta.dir}/../../data/analysis`;
  const analysis: ManifestShape['analysis'] = [];
  for await (const dataPath of glob.scan(baseDir)) {
    const [workOsisID, filename] = dataPath.split('/');
    const dataFile = Bun.file(`${baseDir}/${dataPath}`);
    const dataContents = await dataFile.json();
    const createdAt = new Date(dataContents.createdAt);
    const chapterOsisID = filename.replace('.json', '');
    const bookOsisID = chapterOsisID.split('.').shift() || '';
    analysis.push({
      dataPath: `data/analysis/${dataPath}`,
      workOsisID,
      bookOsisID,
      chapterOsisID,
      modelId: dataContents.modelId,
      createdAt: createdAt.toISOString(),
    });
  }
  analysis.sort((a, b) => {
    const aWorkChapter = `${a.workOsisID}.${a.chapterOsisID}`;
    const bWorkChapter = `${b.workOsisID}.${b.chapterOsisID}`;
    return aWorkChapter.localeCompare(bWorkChapter, undefined, {
      numeric: true,
      sensitivity: 'base',
    });
  });
  return analysis;
}
