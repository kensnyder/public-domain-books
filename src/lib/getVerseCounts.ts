type MinimumVerseShape = {
  bookOsisID: string;
  chapterNumber: number;
  verseNumber: number;
};

export default function getVerseCounts(
  bookOsisID: string,
  verses: MinimumVerseShape[],
) {
  const counts = new Array(1000).fill(0);
  for (const v of verses) {
    if (v.bookOsisID !== bookOsisID) {
      continue;
    }
    counts[v.chapterNumber]++;
  }
  // consider chapter 0 as the prologue, if any
  const shouldPrepend0 = counts[0] === 0;
  const final = counts.filter(Boolean);
  if (shouldPrepend0) {
    final.unshift(0);
  }
  if (bookOsisID === 'AddEsth') {
    // Additions to Esther starts at chapter 10
    final.unshift(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
  return final;
}
