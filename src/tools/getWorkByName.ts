import type { WorkShape } from '~/types/data-shapes.ts';
import { worksLookup } from '../../data/compiled/books-and-works.ts';

export default function getWorkByName(name: string): WorkShape | undefined {
  return worksLookup[String(name || '').toUpperCase()];
}
