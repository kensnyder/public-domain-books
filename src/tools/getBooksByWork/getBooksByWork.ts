import type { BookShape } from '~/types/data-shapes.ts';
import { books } from '../../../data/compiled/books-and-works.ts';
import { getWorkByName } from '../../../index.ts';

/**
 * Retrieves all books belonging to a specific sacred work.
 *
 * @param name The name or alias of the work.
 * @returns An array of books if the work is found, otherwise undefined.
 */
export default function getBooksByWork(name: string): BookShape[] | undefined {
  const work = getWorkByName(name);
  if (!work) {
    return undefined;
  }
  return books.filter((b) => b.workOsisID === work.workOsisID);
}
