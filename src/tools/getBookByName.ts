import type {BookShape} from '~/types/data-shapes.ts';
import { books, booksLookup } from '../../data/compiled/books-and-works.ts';

export default function getBookByName(name: string): BookShape | undefined {
  const idx = booksLookup[String(name || '').toUpperCase()];
  if (idx === undefined) {
    return undefined;
  }
  return books[idx];
}
