import { parseVerseOsisID } from '../parseOsisID/parseOsisID.ts';

/**
 * Retrieves a range of verse OSIS IDs surrounding a given verse.
 *
 * @param verseOsisID The target verse OSIS ID.
 * @param back The number of verses to include before the target.
 * @param fwd The number of verses to include after the target.
 * @returns An array of verse OSIS IDs.
 * @throws TypeError if back or fwd is negative.
 */
export default function getVerseSiblings(
  verseOsisID: string,
  back = 1,
  fwd = 1,
): string[] {
  if (back < 0 || fwd < 0) {
    throw new TypeError(
      'getVerseSiblings: back and fwd context size must be a number greater than 0',
    );
  }
  const parsed = parseVerseOsisID(verseOsisID);
  if (!parsed) {
    return [];
  }
  const siblings: string[] = [];
  for (let i = -1 * back; i <= fwd; i++) {
    // @ts-expect-error our pareVerseOsisID should ensure we have valid chapter and verse
    const osisID = `${parsed.chapterOsisID}.${parsed.verseNumber + i}`;
    const curr = parseVerseOsisID(osisID);
    if (curr && curr.verseOsisID && curr.verseNumber) {
      siblings.push(curr.verseOsisID);
    }
  }
  return siblings;
}
