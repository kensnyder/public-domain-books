import type { BookShape } from '~/types/data-shapes.ts';
import { books, verseCounts } from "../../data/compiled/books-and-works.ts";
import getBookByName from './getBookByName.ts';
import getWorkByName from "./getWorkByName.ts";

export function getRelativeChapter(
  bookOsisID: string,
  chapterNumber: number,
  add: number,
) {
  let book = getBookByName(bookOsisID);
  if (!book) {
    return null;
  }
  add = Math.round(add);
  if (add === 0) {
    return toObject(book, chapterNumber);
  }
  const work = getWorkByName(book.workOsisID);
  if (!work) {
    throw new Error(`Error finding work ${book.workOsisID} referenced by book ${book.bookName}`);
  }
  const siblings = books.filter(b => b.workOsisID === bookOsisID);
  let idx = siblings.indexOf(book);
  const inc = add > 0 ? 1 : -1;
  let toMove = Math.abs(add);
  while (book && toMove-- > 0) {
    chapterNumber += inc;
    const counts = verseCounts[book.bookOsisID];
    if (!counts) {
      throw new Error(`Error finding verse counts for book ${book.bookName}`);
    }
    const verseCount = counts[chapterNumber];
    if (verseCount === 0) {
      // something we are skipping
      toMove++;
    } else if (verseCount === undefined) {
      // roll to prev/next book
      idx += inc;
      book = siblings[idx];
      if (!book) {
        break;
      }
      if (inc === -1) {
        // roll back to highest chapter of next work
        chapterNumber = counts.length - 1;
      } else if (inc === 1) {
        chapterNumber = 1;
      }
    }
  }
  if (book) {
    return toObject(book, chapterNumber);
  } else {
    return null;
  }
}

export function getNextChapter(bookOsisID: string, chapterNumber: number) {
  return getRelativeChapter(bookOsisID, chapterNumber, 1);
}

export function getPreviousChapter(bookOsisID: string, chapterNumber: number) {
  return getRelativeChapter(bookOsisID, chapterNumber, -1);
}

function toObject(book: BookShape, chapterNumber: number) {
  return {
    workOsisID: book.workOsisID,
    bookOsisID: book.bookOsisID,
    chapterOsisID: `${book.bookOsisID}.${chapterNumber}`,
    verseOsisID: `${book.bookOsisID}.${chapterNumber}`,
    chapterNumber,
    chapterTitle:
      chapterNumber === 0
        ? 'Prologue'
        : `${book.chapterLabel} ${chapterNumber}`,
  };
}
