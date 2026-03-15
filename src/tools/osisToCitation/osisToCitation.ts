import parseOsisID from '../parseOsisID/parseOsisID.ts';

export interface OsisCitation {
  short: string;
  long: string;
}

/**
 * Converts an OSIS ID string into human-readable citation strings.
 *
 * @param osis The OSIS ID to convert.
 * @returns An object containing short and long citation strings, or null if input is empty.
 */
export default function osisToCitation(osis: string): OsisCitation | null {
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
