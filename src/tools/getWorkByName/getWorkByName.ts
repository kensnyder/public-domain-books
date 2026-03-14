import type { WorkShape } from '~/types/data-shapes.ts';
import { works, worksLookup } from '../../../data/compiled/books-and-works.ts';

export default function getWorkByName(name: string): WorkShape | undefined {
  const idx = worksLookup[String(name || '').toUpperCase()];
  if (idx === undefined) {
    return undefined;
  }
  return works[idx];
}
