import getBookByName from './getBookByName.ts';

const trim = (s: string) => s.trim();

export default function verseOsisIDToCitation(osis: string) {
  if (!osis) {
    return null;
  }
  const [rawBook, chapter, verse] = osis.split('.').map(trim);
  const book = getBookByName(rawBook);
  const shortName = book?.bookOsisID || rawBook;
  const fullName = book?.bookName || rawBook;
  return {
    short: `${shortName} ${chapter}:${verse}`,
    long: `${fullName} ${chapter}:${verse}`,
  };
}
