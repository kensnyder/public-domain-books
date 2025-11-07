import getBookByName from '~/tools/getBookByName.ts';
import { getWorkByName } from '../../index.ts';

const trim = (s: string) => s.trim();

export default function parseVerseRange(givenVerseOsisIDs: string[]) {
  const [bookOsisID, chapterNumber] = givenVerseOsisIDs[0].split('.').map(trim);
  const chapterOsisID = `${bookOsisID}.${chapterNumber}`;
  const givenVerseNumbers = givenVerseOsisIDs
    .map((v) => Number(v.split('.').pop()))
    .filter(Boolean);
  const startNumber = givenVerseNumbers[0];
  const endNumber = givenVerseNumbers[givenVerseNumbers.length - 1];
  const verseOsisIDs: string[] = [];
  const verseNumbers: number[] = [];
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
