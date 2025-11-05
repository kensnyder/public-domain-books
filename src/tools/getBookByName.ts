import type { BookShape } from '~/types/data-shapes.ts';
import { booksLookup } from '../../data/compiled/books-and-works.ts';

export default function getBookByName(name: string): BookShape | undefined {
  return booksLookup[String(name || '').toUpperCase()];
}
