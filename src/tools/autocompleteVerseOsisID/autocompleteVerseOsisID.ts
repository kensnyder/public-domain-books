import {
  books,
  booksLookup,
  chapterCounts,
  groupsLookup,
  verseCounts,
  works,
  worksLookup,
} from '../../../data/compiled/books-and-works.ts';

export interface AutocompleteOptions {
  text: string;
  limit: number;
  collections?: string[];
}

/**
 * Given user input text, provide suggestions to choose a valid verse id.
 * It operates in 3 modes based on the type of input:
 * 1. When a partial book name/alias is provided (case insensitive), suggest book.bookName values.
 *    Note that the name/alias of the book may start with OR contain the input text.
 * 2. When an exact book is provided, suggest chapter numbers.
 *    Note that the chapter number must start with the input text.
 *    By definition, book.bookOsisID, book.bookName, book.paratext, and book.aliases values are always unique from each other.
 * 3. When an exact full chapter name is provided, suggest verse numbers
 *    Note that the verse number must start with the input text.
 *
 * @param options The options object
 * @param options.text The user's input text
 * @param options.limit The maximum number of suggestions to return
 * @param options.collections Optional list of works or groups to filter by
 * @example
 * autocompleteVerseOsisID({ text: 'ma', limit: 3 }) => ['Malachi', 'Matthew', 'Mark']
 * autocompleteVerseOsisID({ text: 'Matthew', limit: 3 }) => ['Matthew 1', 'Matthew 2', 'Matthew 3']
 * autocompleteVerseOsisID({ text: 'Matthew 1', limit: 3 }) => ['Matthew 1', 'Matthew 10', 'Matthew 11']
 * autocompleteVerseOsisID({ text: 'Matthew 15', limit: 3 }) => ['Matthew 15:1', 'Matthew 15:2', 'Matthew 15:3']
 * autocompleteVerseOsisID({ text: 'Matthew 15:3', limit: 3 }) => ['Matthew 15:3', 'Matthew 15:30', 'Matthew 15:31']
 * autocompleteVerseOsisID({ text: 'Matthew 15:33', limit: 3 }) => ['Matthew 15:33']
 */
export default function autocompleteVerseOsisID({
  text,
  limit,
  collections,
}: AutocompleteOptions): string[] {
  const input = text.trim();
  if (!input) {
    return [];
  }

  const allowedBookIndexes = _getAllowedBookIndexes(collections);
  const isAllowed = (idx: number) =>
    !allowedBookIndexes || allowedBookIndexes.has(idx);

  // Check for exact chapter/verse match (Mode 2 or 3)
  // Use a regex to see if we have "Book Chapter:Verse" or "Book Chapter"
  const match = input.match(/^(.+?)\s+(\d+)(?:\s*:\s*(\d*))?$/);

  if (match) {
    const bookPart = match[1];
    const chapterPart = match[2];
    const versePart = match[3];

    const bookIdx = booksLookup[bookPart.toUpperCase()];
    if (bookIdx !== undefined && isAllowed(bookIdx)) {
      const book = books[bookIdx];

      // Mode 3: Exact book and exact chapter provided, suggest verse numbers
      if (versePart !== undefined) {
        return _getVerseSuggestions({
          bookName: book.bookName,
          bookOsisID: book.bookOsisID,
          chapterNum: Number.parseInt(chapterPart, 10),
          versePart,
          limit,
        });
      }

      // Mode 2: Exact book provided, suggest chapter numbers starting with chapterPart
      const suggestions = _getChapterSuggestions({
        bookName: book.bookName,
        bookOsisID: book.bookOsisID,
        chapterPart,
        limit,
      });

      // If we matched an exact book, but also want to suggest verses (Mode 3)
      // The example says autocompleteVerseOsisID('Matthew 15', 3) => ['Matthew 15:1', 'Matthew 15:2', 'Matthew 15:3']
      // This happens when chapterPart is exactly a chapter number.
      if (
        suggestions.length === 1 &&
        suggestions[0] === `${book.bookName} ${chapterPart}`
      ) {
        return _getVerseSuggestions({
          bookName: book.bookName,
          bookOsisID: book.bookOsisID,
          chapterNum: Number.parseInt(chapterPart, 10),
          versePart: '',
          limit,
        });
      }

      return suggestions;
    }
  }

  // Mode 2: Exact book name provided (without chapter)
  const exactBookIdx = booksLookup[input.toUpperCase()];
  if (exactBookIdx !== undefined && isAllowed(exactBookIdx)) {
    const book = books[exactBookIdx];
    return _getChapterSuggestions({
      bookName: book.bookName,
      bookOsisID: book.bookOsisID,
      chapterPart: '',
      limit,
    });
  }

  // Mode 1: Partial book name/alias
  return _getBookSuggestions({
    input,
    limit,
    isAllowed,
  });
}

/**
 * Pre-calculate allowed book indexes if collections is provided
 */
function _getAllowedBookIndexes(collections?: string[]): Set<number> | null {
  if (!collections || collections.length === 0) {
    return null;
  }
  const allowedBookIndexes = new Set<number>();
  for (const s of collections) {
    const upperScope = s.toUpperCase();
    // Check if it's a group (e.g., "NT", "GOSPELS")
    if (groupsLookup[upperScope]) {
      for (const idx of groupsLookup[upperScope]) {
        allowedBookIndexes.add(idx);
      }
    }
    // Check if it's a work (e.g., "KJV", "BOM")
    if (worksLookup[upperScope] !== undefined) {
      const workIdx = worksLookup[upperScope];
      const workOsisID = works[workIdx].workOsisID;
      for (let i = 0; i < books.length; i++) {
        if (books[i].workOsisID === workOsisID) {
          allowedBookIndexes.add(i);
        }
      }
    }
  }
  return allowedBookIndexes;
}

interface BookSuggestionsOptions {
  input: string;
  limit: number;
  isAllowed: (idx: number) => boolean;
}

/**
 * Mode 1: Suggest book names based on partial name/alias
 */
function _getBookSuggestions({
  input,
  limit,
  isAllowed,
}: BookSuggestionsOptions): string[] {
  const suggestions: string[] = [];
  const upperInput = input.toUpperCase();

  for (let i = 0; i < books.length; i++) {
    if (!isAllowed(i)) {
      continue;
    }
    const book = books[i];
    const nameMatches = book.bookName.toUpperCase().includes(upperInput);
    const osisMatches = book.bookOsisID.toUpperCase().includes(upperInput);
    const paratextMatches = book.paratext?.toUpperCase().includes(upperInput);
    const aliasMatches = book.aliases.some((a) =>
      a.toUpperCase().includes(upperInput),
    );

    if (nameMatches || osisMatches || paratextMatches || aliasMatches) {
      suggestions.push(book.bookName);
    }
    if (suggestions.length >= limit) {
      break;
    }
  }
  return suggestions;
}

interface ChapterSuggestionsOptions {
  bookName: string;
  bookOsisID: string;
  chapterPart: string;
  limit: number;
}

/**
 * Mode 2: Suggest chapter numbers
 */
function _getChapterSuggestions({
  bookName,
  bookOsisID,
  chapterPart,
  limit,
}: ChapterSuggestionsOptions): string[] {
  const maxChapters = chapterCounts[bookOsisID] || 0;
  const suggestions: string[] = [];
  for (let i = 1; i <= maxChapters; i++) {
    const cStr = String(i);
    if (cStr.startsWith(chapterPart)) {
      suggestions.push(`${bookName} ${cStr}`);
    }
    if (suggestions.length >= limit) {
      break;
    }
  }
  return suggestions;
}

interface VerseSuggestionsOptions {
  bookName: string;
  bookOsisID: string;
  chapterNum: number;
  versePart: string;
  limit: number;
}

/**
 * Mode 3: Suggest verse numbers
 */
function _getVerseSuggestions({
  bookName,
  bookOsisID,
  chapterNum,
  versePart,
  limit,
}: VerseSuggestionsOptions): string[] {
  const versesForChapter = verseCounts[bookOsisID]?.[chapterNum] || 0;
  const suggestions: string[] = [];

  for (let i = 1; i <= versesForChapter; i++) {
    const vStr = String(i);
    if (vStr.startsWith(versePart)) {
      suggestions.push(`${bookName} ${chapterNum}:${vStr}`);
    }
    if (suggestions.length >= limit) {
      break;
    }
  }
  return suggestions;
}
