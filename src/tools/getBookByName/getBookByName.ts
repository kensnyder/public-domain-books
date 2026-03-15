import type { BookShape } from '~/types/data-shapes.ts';
import { books, booksLookup } from '../../../data/compiled/books-and-works.ts';

/**
 * Retrieves a book by its name or alias.
 *
 * @param name The name or alias of the book to retrieve.
 * @returns The book object if found, otherwise undefined.
 */
export default function getBookByName(name: string): BookShape | undefined {
  const idx = booksLookup[String(name || '').toUpperCase()];
  if (idx === undefined) {
    return undefined;
  }
  return books[idx];
}
