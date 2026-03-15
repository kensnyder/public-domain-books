import type { BookShape, WorkShape } from '../../types/data-shapes.ts';
import getBookByName from '../getBookByName/getBookByName.ts';
import getWorkByName from '../getWorkByName/getWorkByName.ts';
import parseOsisID from '../parseOsisID/parseOsisID.ts';

export interface ParsedVerseRange {
  workOsisID: string | null;
  bookOsisID: string;
  chapterOsisID: string;
  chapterNumber: number | null;
  verseNumbers: number[];
  verseOsisIDs: string[];
  book: BookShape | null;
  work: WorkShape | null;
}

/**
 * Parses an array of verse OSIS IDs and generates a full range of verses between the first and last ID.
 *
 * @param givenVerseOsisIDs An array of OSIS IDs.
 * @returns An object containing the range metadata or undefined if input is empty.
 */
export default function parseVerseRange(
  givenVerseOsisIDs: string[],
): ParsedVerseRange | undefined {
  const parsed = givenVerseOsisIDs.map(parseOsisID).filter(Boolean);
  if (parsed.length === 0) {
    return undefined;
  }
  const givenVerseNumbers = parsed.map((v) => v.verseNumber!);
  const { bookOsisID, chapterNumber } = parsed[0];
  const chapterOsisID = `${bookOsisID}.${chapterNumber}`;
  const startNumber = givenVerseNumbers[0];
  let endNumber = givenVerseNumbers[givenVerseNumbers.length - 1];
  const verseOsisIDs: string[] = [];
  const verseNumbers: number[] = [];
  if (startNumber > endNumber) {
    endNumber = startNumber;
  }
  for (let i = startNumber; i <= endNumber; i++) {
    verseOsisIDs.push(`${chapterOsisID}.${i}`);
    verseNumbers.push(i);
  }
  const book = getBookByName(bookOsisID) || null;
  const work = book ? getWorkByName(book.workOsisID) || null : null;
  const workOsisID = book ? book.workOsisID : null;
  return {
    workOsisID,
    bookOsisID,
    chapterOsisID,
    chapterNumber,
    verseNumbers,
    verseOsisIDs,
    book,
    work,
  };
}
