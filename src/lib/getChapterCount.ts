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
  if (bookOsisID === 'AddEsth') {
    // Additions to Esther starts at chapter 10:4
    // So we must add one because it doesn't have a verse 1
    count++;
  }
  return count;
}
