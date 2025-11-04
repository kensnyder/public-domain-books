export default function osisToHuman(osis: string) {
  if (!osis) {
    return '';
  }
  const [rawBook, chapter, verse] = osis.split('.');
  const book = rawBook.replace(/^[0-9]+/, (n) => `${n} `);
  return `${book.trim()} ${chapter}:${verse}`;
}
