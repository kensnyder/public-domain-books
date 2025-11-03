import { booksLookup } from '../data/allData.ts';

export default function getBookByName(name: string) {
  return booksLookup[String(name || '').toUpperCase()];
}
