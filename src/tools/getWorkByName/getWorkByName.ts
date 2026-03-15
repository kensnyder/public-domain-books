import type { WorkShape } from '~/types/data-shapes.ts';
import { works, worksLookup } from '../../../data/compiled/books-and-works.ts';

/**
 * Retrieves a sacred work by its name or alias.
 *
 * @param name The name or alias of the work to retrieve.
 * @returns The work object if found, otherwise undefined.
 */
export default function getWorkByName(name: string): WorkShape | undefined {
  const idx = worksLookup[String(name || '').toUpperCase()];
  if (idx === undefined) {
    return undefined;
  }
  return works[idx];
}
