import { booksLookup } from '../../../data/compiled/books-and-works.ts';
import citationToOsisIDs from '../citationToOsisIDs/citationToOsisIDs.ts';

type Found = Array<{
  citation: string;
  index: number;
  verseOsisIDs: string[];
}>;

const books = Object.keys(booksLookup).toSorted((a, b) => b.length - a.length);

const regex = new RegExp(
  `\\b(${books.join('|')})\\.?\\s+[\\d\\s:.,;–-]+`,
  'gi',
);

export default function findCitations(text: string): Found {
  const found: Found = [];
  for (const match of text.matchAll(regex)) {
    const citation = match[0].replace(/[\s:.,;–-]+$/, '');
    const verseOsisIDs = citationToOsisIDs(citation);
    if (verseOsisIDs.length === 0) {
      continue;
    }
    found.push({ citation, index: match.index, verseOsisIDs });
  }
  return found;
}
