const trim = (s: string) => s.trim();

export default function parseVerseRangeWithContext(
  givenVerseOsisIDs: string[],
) {
  const [bookOsisID, chapterNumber] = givenVerseOsisIDs[0].split('.').map(trim);
  const chapterOsisID = `${bookOsisID}.${chapterNumber}`;
  const givenVerseNumbers = givenVerseOsisIDs
    .map((v) => Number(v.split('.').pop()))
    .filter(Boolean);
  const prevNumber = givenVerseNumbers[0] - 1 || givenVerseNumbers[0];
  const endNumber = givenVerseNumbers[givenVerseNumbers.length - 1];
  const nextNumber = endNumber + 1;
  const verseOsisIDs: string[] = [];
  const verseNumbers: number[] = [];
  for (let i = prevNumber; i <= nextNumber; i++) {
    verseOsisIDs.push(`${chapterOsisID}.${i}`);
    verseNumbers.push(i);
  }
  return {
    bookOsisID,
    chapterOsisID,
    chapterNumber,
    verseNumbers,
    verseOsisIDs,
  };
}
