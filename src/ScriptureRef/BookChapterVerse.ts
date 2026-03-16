import ScriptureRef from './ScriptureRef.ts';
import Work from './Work.ts';
import Book from './Book.ts';
import BookChapter from './BookChapter.ts';
import parseOsisID from '../tools/parseOsisID/parseOsisID.ts';
import { verseCounts } from '../../data/compiled/books-and-works.ts';

export default class BookChapterVerse {
  private _chapter: BookChapter;
  private _verseNumber: number;

  constructor(chapter: BookChapter, verseNumber: number) {
    this._chapter = chapter;
    this._verseNumber = verseNumber;
  }

  get work(): Work {
    return this._chapter.work;
  }

  get book(): Book {
    return this._chapter.book;
  }

  get chapter(): BookChapter {
    return this._chapter;
  }

  get osisID(): string {
    return `${this._chapter.osisID}.${this._verseNumber}`;
  }

  get number(): number {
    return this._verseNumber;
  }

  get unitName(): string {
    return this._verseNumber === 0 ? 'Title' : this.book.verseUnitName;
  }

  get citation(): string {
    return `${this.book.osisID} ${this._chapter.number}:${this._verseNumber}`;
  }

  get longCitation(): string {
    return `${this.book.title} ${this._chapter.number}:${this._verseNumber}`;
  }

  // Navigation (Rolls over boundaries)
  prev(): ScriptureRef | null {
    const { bookOsisID, chapterNumber, verseNumber } = parseOsisID(this.osisID);
    if (verseNumber && verseNumber > 1) {
      return new ScriptureRef(bookOsisID, chapterNumber, verseNumber - 1);
    }

    // Boundary crossing
    const prevChapter = this._chapter.prev();
    if (!prevChapter) {
      return null;
    }
    const verses = prevChapter.chapter?.verses;
    if (!verses || verses.length === 0) {
      return prevChapter;
    }
    return verses.toArray()[verses.length - 1];
  }

  next(): ScriptureRef | null {
    const { bookOsisID, chapterNumber, verseNumber } = parseOsisID(this.osisID);
    const count = verseCounts[bookOsisID!]?.[chapterNumber!] || 0;
    if (verseNumber && verseNumber < count) {
      return new ScriptureRef(bookOsisID, chapterNumber, verseNumber + 1);
    }

    // Boundary crossing
    const nextChapter = this._chapter.next();
    if (!nextChapter) {
      return null;
    }
    return nextChapter.chapter?.firstVerse() || nextChapter;
  }
}
