import {
  books,
  booksLookup,
  chapterCounts,
  verseCounts,
} from '../../../data/compiled/books-and-works.ts';

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
 * @param text The user's input text
 * @param limit The maximum number of suggestions to return
 * @example
 * autocompleteVerseOsisID('ma', 3) => ['Malachi', 'Matthew', 'Mark']
 * autocompleteVerseOsisID('Matthew', 3) => ['Matthew 1', 'Matthew 2', 'Matthew 3']
 * autocompleteVerseOsisID('Matthew 1', 3) => ['Matthew 1', 'Matthew 10', 'Matthew 11']
 * autocompleteVerseOsisID('Matthew 1', 3) => ['Matthew 1', 'Matthew 10', 'Matthew 11']
 * autocompleteVerseOsisID('Matthew 15', 3) => ['Matthew 15:1', 'Matthew 15:2', 'Matthew 15:3']
 * autocompleteVerseOsisID('Matthew 15:3', 3) => ['Matthew 15:3', 'Matthew 15:30', 'Matthew 15:31']
 * autocompleteVerseOsisID('Matthew 15:33', 3) => ['Matthew 15:33']
 */
export default function autocompleteVerseOsisID(
  text: string,
  limit: number,
): string[] {
  const input = text.trim();
  if (!input) {
    return [];
  }

  // Check for exact chapter/verse match (Mode 2 or 3)
  // Use a regex to see if we have "Book Chapter:Verse" or "Book Chapter"
  const match = input.match(/^(.+?)\s+(\d+)(?:\s*:\s*(\d*))?$/);

  if (match) {
    const bookPart = match[1];
    const chapterPart = match[2];
    const versePart = match[3];

    const bookIdx = booksLookup[bookPart.toUpperCase()];
    if (bookIdx !== undefined) {
      const book = books[bookIdx];
      const maxChapters = chapterCounts[book.bookOsisID] || 0;

      // Mode 3: Exact book and exact chapter provided, suggest verse numbers
      if (versePart !== undefined) {
        const chapterNum = Number.parseInt(chapterPart, 10);
        const versesForChapter =
          verseCounts[book.bookOsisID]?.[chapterNum] || 0;
        const suggestions: string[] = [];

        for (let i = 1; i <= versesForChapter; i++) {
          const vStr = String(i);
          if (vStr.startsWith(versePart)) {
            suggestions.push(`${book.bookName} ${chapterNum}:${vStr}`);
          }
          if (suggestions.length >= limit) {
            break;
          }
        }
        return suggestions;
      }

      // Mode 2: Exact book provided, suggest chapter numbers starting with chapterPart
      const suggestions: string[] = [];
      for (let i = 1; i <= maxChapters; i++) {
        const cStr = String(i);
        if (cStr.startsWith(chapterPart)) {
          suggestions.push(`${book.bookName} ${cStr}`);
        }
        if (suggestions.length >= limit) {
          break;
        }
      }

      // If we matched an exact book, but also want to suggest verses (Mode 3)
      // The example says autocompleteVerseOsisID('Matthew 15', 3) => ['Matthew 15:1', 'Matthew 15:2', 'Matthew 15:3']
      // This happens when chapterPart is exactly a chapter number.
      if (
        suggestions.length === 1 &&
        suggestions[0] === `${book.bookName} ${chapterPart}`
      ) {
        const chapterNum = Number.parseInt(chapterPart, 10);
        const versesForChapter =
          verseCounts[book.bookOsisID]?.[chapterNum] || 0;
        const verseSuggestions: string[] = [];
        for (let i = 1; i <= versesForChapter; i++) {
          verseSuggestions.push(`${book.bookName} ${chapterNum}:${i}`);
          if (verseSuggestions.length >= limit) {
            break;
          }
        }
        return verseSuggestions;
      }

      return suggestions;
    }
  }

  // Mode 2: Exact book name provided (without chapter)
  const exactBookIdx = booksLookup[input.toUpperCase()];
  if (exactBookIdx !== undefined) {
    const book = books[exactBookIdx];
    const maxChapters = chapterCounts[book.bookOsisID] || 0;
    const suggestions: string[] = [];
    for (let i = 1; i <= maxChapters; i++) {
      suggestions.push(`${book.bookName} ${i}`);
      if (suggestions.length >= limit) {
        break;
      }
    }
    return suggestions;
  }

  // Mode 1: Partial book name/alias
  const suggestions: string[] = [];
  const upperInput = input.toUpperCase();

  for (const book of books) {
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
