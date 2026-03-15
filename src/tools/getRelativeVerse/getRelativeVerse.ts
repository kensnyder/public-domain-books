import { parseVerseOsisID } from '../parseOsisID/parseOsisID.ts';
import { isValidVerseOsisID } from '../validateOsisID/validateOsisID.ts';

/**
 * Retrieves an OSIS ID of a verse relative to a given verse OSIS ID.
 *
 * @param osisID The starting verse OSIS ID.
 * @param addend The number of verses to move.
 * @returns The relative verse OSIS ID if valid, otherwise null.
 */
export default function getRelativeVerse(
  osisID: string,
  addend: number,
): string | null {
  if (!isValidVerseOsisID(osisID)) {
    return null;
  }
  // @ts-expect-error isValidVerseOsisID ensures we have non-null value
  const { bookOsisID, chapterNumber, verseNumber } = parseVerseOsisID(osisID);
  const newOsisID = `${bookOsisID}.${chapterNumber}.${verseNumber + addend}`;
  if (!isValidVerseOsisID(newOsisID)) {
    return null;
  }
  return newOsisID;
}

/**
 * Retrieves the OSIS ID of the previous verse.
 *
 * @param osisID The current verse OSIS ID.
 * @returns The previous verse OSIS ID if valid, otherwise null.
 */
export function getPreviousVerse(osisID: string): string | null {
  return getRelativeVerse(osisID, -1);
}

/**
 * Retrieves the OSIS ID of the next verse.
 *
 * @param osisID The current verse OSIS ID.
 * @returns The next verse OSIS ID if valid, otherwise null.
 */
export function getNextVerse(osisID: string): string | null {
  return getRelativeVerse(osisID, 1);
}
