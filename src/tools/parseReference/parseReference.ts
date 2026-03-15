import { books, booksLookup } from '../../../data/compiled/books-and-works.ts';

export interface ParsedReference {
  workOsisID: string | null;
  bookOsisID: string | null;
  bookName: string | null;
  chapterNumber: number | null;
  chapterOsisID: string | null;
  verseNumber: number | null;
  verseOsisID: string | null;
  citation: string | null;
  longCitation: string | null;
}

/**
 * Parses a human-readable verse reference string (e.g., "John 3:16", "Genesis 1:1") into its components.
 *
 * @param verseString The reference string to parse.
 * @returns An object containing the parsed components, or null if the format is invalid or the book is not found.
 */
export default function parseReference(verseString: string): ParsedReference {
  const result: ParsedReference = {
    workOsisID: null,
    bookOsisID: null,
    bookName: null,
    chapterNumber: null,
    chapterOsisID: null,
    verseNumber: null,
    verseOsisID: null,
    citation: null,
    longCitation: null,
  };
  const normalized = String(verseString)
    .toUpperCase()
    .trim()
    .replace(/[^A-Z0-9&: ]/g, '');
  if (normalized.length === 0) {
    return result;
  }

  const segments = normalized.split(/[\s:]+/);
  if (segments.length === 0) {
    return result;
  }
  if (segments.length >= 2 && segments[0].match(/^\d+/)) {
    const number = segments.shift();
    segments[0] = `${number} ${segments[0]}`;
  }
  const idx = booksLookup[segments.shift()!];
  if (!books[idx]) {
    return result;
  }
  result.bookOsisID = books[idx].bookOsisID;
  result.workOsisID = books[idx].workOsisID;
  result.bookName = books[idx].bookName;
  result.longCitation = books[idx].bookName;
  result.citation = result.bookOsisID;
  if (segments.length === 0) {
    return result;
  }
  const chapter = segments.shift()!;
  const chapterNumber = chapter === 'INTRO' ? 0 : Number.parseInt(chapter, 10);
  if (Number.isNaN(chapterNumber)) {
    return result;
  }
  result.chapterNumber = chapterNumber;
  result.chapterOsisID = `${result.bookOsisID}.${chapterNumber}`;
  result.citation = `${result.bookOsisID} ${result.chapterNumber}`;
  result.longCitation = `${result.bookName} ${result.chapterNumber}`;
  if (segments.length === 0) {
    return result;
  }

  const verse = segments.shift()!;
  const verseNumber = verse === 'TITLE' ? 0 : Number.parseInt(verse, 10);
  if (Number.isNaN(verseNumber)) {
    return result;
  }

  result.verseNumber = verseNumber;
  result.verseOsisID = `${result.bookOsisID}.${result.chapterNumber}.${verseNumber}`;
  result.citation = `${result.bookOsisID} ${result.chapterNumber}:${verseNumber}`;
  result.longCitation = `${result.bookName} ${result.chapterNumber}:${verseNumber}`;
  return result;
}
