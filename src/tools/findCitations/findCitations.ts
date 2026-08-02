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
      const fullCitation = citationMatch[0].replace(/[\s:.,;–-]+$/, '');
      const parts = fullCitation.split(';');
      const bookName = citationMatch[1];
      
      let offset = 0;

      for (let j = 0; j < parts.length; j++) {
        const part = parts[j];
        const trimmedPart = part.trim();
        
        if (!trimmedPart) {
          continue;
        }

        const partIndexInCitation = fullCitation.indexOf(trimmedPart, offset);
        
        let citationToParse = trimmedPart;
        if (j > 0) {
          citationToParse = `${bookName} ${trimmedPart}`;
        }

        const verseOsisIDs = citationToOsisIDs(citationToParse);
        if (verseOsisIDs.length > 0) {
          found.push({
            citation: trimmedPart,
            index: startIndex + partIndexInCitation,
            verseOsisIDs,
          });
        }
        
        // Advance offset to prevent finding an earlier duplicate string
        offset = partIndexInCitation + trimmedPart.length;
      }
    }
  }
  return found;
}
