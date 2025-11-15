import { parseVerseOsisID } from './parseOsisID.ts';
import { isValidVerseOsisID } from './validateOsisID.ts';

export default function getRelativeVerse(osisID: string, addend: number) {
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

export function getPreviousVerse(osisID: string) {
  return getRelativeVerse(osisID, -1);
}

export function getNextVerse(osisID: string) {
  return getRelativeVerse(osisID, 1);
}
