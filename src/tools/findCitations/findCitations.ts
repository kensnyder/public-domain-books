import { booksLookup } from '../../../data/compiled/books-and-works.ts';
import citationToOsisIDs from '../citationToOsisIDs/citationToOsisIDs.ts';

type Found = Array<{
  citation: string;
  index: number;
  verseOsisIDs: string[];
}>;

const escapeRegExp = (string: string) =>
  string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const books = Object.keys(booksLookup)
  .toSorted((a, b) => b.length - a.length)
  .map(escapeRegExp);

const bookPattern = books.join('|');
const bookRegex = new RegExp(`\\b(${bookPattern})\\b`, 'gi');
const citationRegex = new RegExp(
  `^(${bookPattern})\\.?\\s+[\\d\\s:.,;–-]+`,
  'i',
);

export default function findCitations(text: string): Found {
  const found: Found = [];
  const matches = [...text.matchAll(bookRegex)];

  for (let i = 0; i < matches.length; i++) {
    const match = matches[i];
    const startIndex = match.index;
    const nextMatchIndex =
      i + 1 < matches.length ? matches[i + 1].index : text.length;

    const slice = text.slice(startIndex, nextMatchIndex);
    const citationMatch = slice.match(citationRegex);

    if (citationMatch) {
      const citation = citationMatch[0].replace(/[\s:.,;–-]+$/, '');
      const verseOsisIDs = citationToOsisIDs(citation);
      if (verseOsisIDs.length === 0) {
        continue;
      }
      found.push({ citation, index: startIndex, verseOsisIDs });
    }
  }
  return found;
}
