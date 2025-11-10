import getBookByName from '~/tools/getBookByName.ts';

const trim = (s: string) => s.trim();

export default function osisToCitation(osis: string) {
  if (!osis) {
    return null;
  }
  const [rawBook, chapter, verse] = osis.split('.').map(trim);
  const book = getBookByName(rawBook);
  const shortName = book?.bookOsisID || rawBook;
  const fullName = book?.bookName || rawBook;
  if (chapter && verse) {
    return {
      short: `${shortName} ${chapter}:${verse}`,
      long: `${fullName} ${chapter}:${verse}`,
    };
  } else if (chapter) {
    return {
      short: `${shortName} ${chapter}`,
      long: `${fullName} ${chapter}`,
    };
  } else {
    return {
      short: shortName,
      long: fullName,
    };
  }
}
