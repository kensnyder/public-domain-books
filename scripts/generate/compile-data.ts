import books from '../../data/books/books.json' with { type: 'json' };
import BofM from '../../data/verses/BofM.json' with { type: 'json' };
import DnC from '../../data/verses/D&C.json' with { type: 'json' };
import Didache from '../../data/verses/Didache.json' with { type: 'json' };
import KJV from '../../data/verses/KJV.json' with { type: 'json' };
import KJVA from '../../data/verses/KJVA.json' with { type: 'json' };
import PGP from '../../data/verses/PGP.json' with { type: 'json' };
import works from '../../data/works/works.json' with { type: 'json' };
import type { RawBookShape, VerseShape } from '../../src/types/data-shapes.ts';

const verses = {
  BofM: BofM.verses as VerseShape[],
  'D&C': DnC.verses as VerseShape[],
  Didache: Didache.verses as VerseShape[],
  KJV: KJV.verses as VerseShape[],
  KJVA: KJVA.verses as VerseShape[],
  PGP: PGP.verses as VerseShape[],
};

const tsDest = Bun.file(
  `${import.meta.dir}/../../src/data/compiled/books-and-works.ts`,
);
const jsonDest = Bun.file(
  `${import.meta.dir}/../../data/compiled/books-and-works.json`,
);
const s = (v: any) => JSON.stringify(v, null, 2);

const booksWithData = (books as unknown as RawBookShape[])
  .filter((b) => b.hasData)
  .map((b) => ({
    workOsisID: b.workOsisID,
    bookName: b.bookName,
    bookSubtitle: b.bookSubtitle,
    bookOsisID: b.bookOsisID,
    paratext: b.paratext,
    groups: b.groups,
    aliases: b.aliases,
    chapterLabel: b.chapterLabel,
    verseLabel: b.verseLabel,
    authors: b.authors,
    traditions: [], //b.traditions,
    dateEarliest: b.dateEarliest,
    dateLatest: b.dateLatest,
    chapterCount: b.chapterCount,
    verseCounts: b.verseCounts,
  }));

const jsonData = {
  books: null,
  works: null,
  worksLookup: {} as Record<string, number>,
  booksLookup: {} as Record<string, number>,
  groupsLookup: {} as Record<string, number>,
};
const output = [];

// works
output.push(`export const works = ${s(works)};`);
output.push(`const w = works;`);
output.push(
  `export const worksLookup : Record<string, (typeof w)[number]> = {`,
);
for (let i = 0; i < works.length; i++) {
  const work = works[i];
  const titleUpper = work.workTitle.toUpperCase();
  output.push(`  ${s(titleUpper)}: w[${i}],`);
  const osisIdUpper = work.workOsisID.toUpperCase();
  if (titleUpper !== osisIdUpper) {
    output.push(`  ${s(osisIdUpper)}: w[${i}],`);
  }
  for (const alias of work.aliases) {
    const aliasUpper = alias.toUpperCase();
    if (aliasUpper !== titleUpper && aliasUpper !== osisIdUpper) {
      output.push(`  ${s(aliasUpper)}: w[${i}],`);
    }
  }
}
output.push(`};`);

// books
// TODO: get chapter count and verse counts
// const booksWithData = books.filter((b) => b.hasData);
output.push(`export const books = ${s(booksWithData)};`);
output.push(`const b = books;`);
output.push(
  `export const booksLookup : Record<string, (typeof b)[number]> = {`,
);
for (let i = 0; i < booksWithData.length; i++) {
  const book = booksWithData[i];
  const nameUpper = book.bookName.toUpperCase();
  const osisIdUpper = book.bookOsisID.toUpperCase();
  const paraUpper = String(book.paratext || '').toUpperCase();
  output.push(`  ${s(nameUpper)}: b[${i}],`);
  if (osisIdUpper !== nameUpper) {
    output.push(`  ${s(book.bookOsisID.toUpperCase())}: b[${i}],`);
  }
  if (paraUpper && paraUpper !== nameUpper && paraUpper !== osisIdUpper) {
    output.push(`  ${s(paraUpper)}: b[${i}],`);
  }
  for (const alias of book.aliases) {
    const aliasUpper = String(alias || '').toUpperCase();
    if (
      aliasUpper === nameUpper ||
      aliasUpper === osisIdUpper ||
      aliasUpper === paraUpper
    ) {
      continue;
    }
    output.push(`  ${s(aliasUpper)}: b[${i}],`);
  }
}
output.push(`};`);
// groups lookup
const groups: Record<string, number[]> = {};
for (let i = 0; i < booksWithData.length; i++) {
  for (const group of booksWithData[i].groups) {
    const groupUpper = group.toUpperCase();
    if (!(groupUpper in groups)) {
      groups[groupUpper] = [];
    }
    groups[groupUpper].push(i);
  }
}
output.push(`export const groupsLookup : Record<string, typeof b> = {`);
for (const [nameUpper, bookIdxs] of Object.entries(groups)) {
  output.push(`  ${s(nameUpper)}: [`);
  for (const i of bookIdxs) {
    output.push(`    b[${i}],`);
  }
  output.push(`  ],`);
}
output.push(`};`);
output.push(`
for (const book of books) {
  const work = worksLookup[book.workOsisID];
  if (!work.books) {
    work.books = [];
  }
  work.books.push(book);
  books.work = work;
}
`);
// write it all
await tsDest.write(output.join('\n'));
await jsonDest.write(s(jsonData));
