import { parseVerseOsisID } from './parseOsisID.ts';

export default function getVerseSiblings(
  verseOsisID: string,
  back = 1,
  fwd = 1,
) {
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
    if (curr?.verseOsisID) {
      siblings.push(curr.verseOsisID);
    }
  }
  return siblings;
}
