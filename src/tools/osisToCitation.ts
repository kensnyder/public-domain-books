import parseOsisID from './parseOsisID.ts';

export default function osisToCitation(osis: string) {
  if (!osis) {
    return null;
  }
  const { bookOsisID, chapterNumber, verseNumber, book } = parseOsisID(osis);
  const shortName = book?.bookOsisID || bookOsisID;
  const fullName = book?.bookName || bookOsisID;
  if (chapterNumber && verseNumber) {
    return {
      short: `${shortName} ${chapterNumber}:${verseNumber}`,
      long: `${fullName} ${chapterNumber}:${verseNumber}`,
    };
  } else if (chapterNumber) {
    return {
      short: `${shortName} ${chapterNumber}`,
      long: `${fullName} ${chapterNumber}`,
    };
  } else {
    return {
      short: shortName,
      long: fullName,
    };
  }
}
