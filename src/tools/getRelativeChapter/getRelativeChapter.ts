import type { BookShape } from '~/types/data-shapes.ts';
import { books, verseCounts } from '../../../data/compiled/books-and-works.ts';
import getBookByName from '../getBookByName/getBookByName.ts';
import getWorkByName from '../getWorkByName/getWorkByName.ts';

export interface RelativeChapter {
  workOsisID: string;
  bookOsisID: string;
  chapterOsisID: string;
  verseOsisID: string;
  chapterNumber: number;
  chapterTitle: string;
}

/**
 * Retrieves a chapter relative to a given book and chapter number.
 * Supports crossing book boundaries within the same work.
 *
 * @param bookOsisID The starting book OSIS ID.
 * @param chapterNumber The starting chapter number.
 * @param add The number of chapters to move (positive for forward, negative for backward).
 * @returns The relative chapter metadata if found, otherwise null.
 */
export function getRelativeChapter(
  bookOsisID: string,
  chapterNumber: number,
  add: number,
): RelativeChapter | null {
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
    throw new Error(
      `Error finding work ${book.workOsisID} referenced by book ${book.bookName}`,
    );
  }
  const siblings = books.filter((b) => b.workOsisID === book!.workOsisID);
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
      const countsForNewBook = verseCounts[book.bookOsisID];
      if (!countsForNewBook) {
        throw new Error(`Error finding verse counts for book ${book.bookName}`);
      }
      if (inc === -1) {
        // roll back to highest chapter of next work
        chapterNumber = countsForNewBook.length - 1;
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

/**
 * Retrieves the next chapter relative to the given book and chapter number.
 *
 * @param bookOsisID The current book OSIS ID.
 * @param chapterNumber The current chapter number.
 * @returns The next chapter metadata if found, otherwise null.
 */
export function getNextChapter(
  bookOsisID: string,
  chapterNumber: number,
): RelativeChapter | null {
  return getRelativeChapter(bookOsisID, chapterNumber, 1);
}

/**
 * Retrieves the previous chapter relative to the given book and chapter number.
 *
 * @param bookOsisID The current book OSIS ID.
 * @param chapterNumber The current chapter number.
 * @returns The previous chapter metadata if found, otherwise null.
 */
export function getPreviousChapter(
  bookOsisID: string,
  chapterNumber: number,
): RelativeChapter | null {
  return getRelativeChapter(bookOsisID, chapterNumber, -1);
}

function toObject(book: BookShape, chapterNumber: number): RelativeChapter {
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
