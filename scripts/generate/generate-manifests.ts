import { Glob } from 'bun';
import type { ManifestShape } from '../../src/types/data-shapes.ts';

main().catch(console.error);
async function main() {
  const manifest: ManifestShape = {
    works: {
      dataPath: 'data/research/works.json',
      size: Bun.file(`${import.meta.dir}/../../data/research/books.json`).size,
    },
    books: {
      dataPath: 'data/research/books.json',
      size: Bun.file(`${import.meta.dir}/../../data/research/books.json`).size,
    },
    booksAndWorks: {
      dataPath: 'data/compiled/books-and-works.json',
      size: Bun.file(
        `${import.meta.dir}/../../data/compiled/books-and-works.json`,
      ).size,
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
    const text = await file.text();
    const data = JSON.parse(text);
    const date = data.date;
    const license = data.licence;
    xrs.push({
      dataPath: `data/crossReferences/${dataPath}`,
      workOsisID,
      date,
      license,
      size: text.length,
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
    const text = await file.text();
    const data = JSON.parse(text);
    verses.push({
      dataPath: `data/verses/${dataPath}`,
      workOsisID,
      compiledAt: data.compiledAt,
      size: text.length,
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
    const text = await file.text();
    const data = JSON.parse(text);
    commentaries.push({
      dataPath: `data/commentaries/${dataPath}`,
      workOsisID,
      commentaryID,
      bookOsisID,
      compiledAt: data.importedAt,
      size: text.length,
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
    const file = Bun.file(`${baseDir}/${dataPath}`);
    const text = await file.text();
    const data = JSON.parse(text);
    const createdAt = new Date(data.createdAt);
    const chapterOsisID = filename.replace('.json', '');
    const bookOsisID = chapterOsisID.split('.').shift() || '';
    analysis.push({
      dataPath: `data/analysis/${dataPath}`,
      workOsisID,
      bookOsisID,
      chapterOsisID,
      modelId: data.modelId,
      createdAt: createdAt.toISOString(),
      size: text.length,
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
