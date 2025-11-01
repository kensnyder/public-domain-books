type MinimumDataShape = {
  bookOsisID: string;
  chapterNumber: number;
  verseNumber: number;
};

export default function getChapterCount(
  bookOsisID: string,
  verses: MinimumDataShape[],
) {
  let count = 0;
  for (const verse of verses) {
    if (verse.bookOsisID !== bookOsisID) {
      continue;
    }
    if (verse.verseNumber !== 1) {
      continue;
    }
    count++;
  }
  return count;
}
