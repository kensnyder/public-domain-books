import type { BookShape } from '~/types/data-shapes.ts';
import {
  books
} from '../../data/compiled/books-and-works.ts';
import {getWorkByName} from "../../index.ts";

export default function getBooksByWork(name: string): BookShape[] | undefined {
  const work = getWorkByName(name);
  if (!work) {
    return undefined;
  }
  return books.filter(b => b.workOsisID === work.workOsisID);
}
