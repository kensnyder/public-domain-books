---
name: scripture-ref
description: Guide for using the ScriptureRef class to work with scripture books, chapters, and verses in a reading, annotation, and cross-referencing application. Use this skill when building features that involve navigating, displaying, validating, or storing scripture references.
---

# ScriptureRef Skill

`ScriptureRef` is an immutable value object representing a scripture location — a book, a book+chapter, or a book+chapter+verse. All components are optional; missing ones are `null`. The "Keep and Flag" design means invalid inputs are stored as-is so that user-facing feedback (e.g., "invalid book") is possible rather than throwing on construction.

All source files live in `src/ScriptureRef/`.

---

## Core Concepts

### OSIS IDs

The canonical internal format is an OSIS ID: `"Gen"`, `"Gen.1"`, `"Gen.1.1"`. Book codes are abbreviations from the OSIS standard (e.g., `Gen`, `Exod`, `Matt`, `John`, `Rev`). Chapter 0 and verse 0 are valid for prologues and titles.

### Citations

Human-readable strings like `"Genesis 1:1"`, `"John 3:16"`, or `"Ps 119"`. The `.citation` getter returns the short form (book code + numbers); `.longCitation` returns the full book name.

---

## Construction

```ts
import ScriptureRef from './src/ScriptureRef/ScriptureRef.ts';

// From components directly (book OSIS ID, chapter, verse — all optional/null)
const ref = new ScriptureRef('John', 3, 16);
const bookOnly = new ScriptureRef('Gen');
const empty = new ScriptureRef();

// From OSIS ID string
const ref = ScriptureRef.fromOsisID('John.3.16');    // verse
const ch  = ScriptureRef.fromOsisID('Gen.1');         // chapter
const bk  = ScriptureRef.fromOsisID('Rev');           // book

// From human-readable citation (parses "John 3:16", "Genesis 1", "Ps 119:1", etc.)
const ref = ScriptureRef.fromCitation('John 3:16');

// From a range citation — returns a ScriptureRefCollection, not a single ref
const col = ScriptureRef.fromRange('John 3:16-18');
const col = ScriptureRef.fromRange('Matt 5:1-7:29');  // multi-chapter range
```

---

## Validation

```ts
ref.isValid           // boolean — book/chapter/verse all exist in data
ref.hasBook           // boolean — book component was provided (may still be invalid)
ref.hasChapter        // boolean
ref.hasVerse          // boolean

ref.validation        // OsisValidation object:
  // .isValid, .bookExists, .chapterExists, .verseExists
  // .errorCode: 'INVALID_BOOK' | 'INVALID_CHAPTER' | 'INVALID_VERSE' | null
```

Use `validation.errorCode` to give users a specific inline error message when they type a reference into a search box.

---

## Reading Ref Components

```ts
ref.osisID          // "Gen.1.1" | null
ref.bookOsisID      // "Gen| | null
ref.chapterNumber   // 1 | null
ref.verseNumber     // 1 | null
ref.citation        // "Gen 1:1" (short) | null
ref.longCitation    // "Genesis 1:1" (long) | null
ref.toString()      // same as osisID
ref.toJSON()        // same as osisID
```

---

## Hierarchy Traversal

Each getter returns a lazy-loaded object. Accessing `.verse` on a book-only ref returns `null`.

```ts
// Going DOWN the hierarchy
ref.work            // Work   — the scripture collection (e.g. "The Holy Bible")
ref.book            // Book   — book-level metadata
ref.chapter         // BookChapter | null
ref.verse           // BookChapterVerse | null

// Going UP from sub-objects
ref.verse?.chapter  // BookChapter
ref.verse?.book     // Book
ref.verse?.work     // Work
ref.chapter?.book   // Book
ref.chapter?.work   // Work
ref.book?.work      // Work
```

### Work properties
```ts
work.osisID         // e.g. "Bible"
work.title          // e.g. "The Holy Bible"
work.subtitle
work.aliases        // string[]
work.books          // ScriptureRefCollection of all books in this work
work.hasData        // false if the work isn't in the dataset
```

### Book properties
```ts
book.osisID         // "Gen"
book.title          // "Genesis"
book.subtitle
book.paratext       // introductory text | null
book.aliases        // ["1 Moses", "The First Book of Moses", ...]
book.groups         // ["Torah", "Pentateuch", "OT", ...]
book.authors        // ["Moses"]
book.traditions     // ["Jewish", "Catholic", "Protestant", ...]
book.dateEarliest   // "900 BCE"
book.dateLatest     // "400 BCE"
book.chapterUnitName  // "Chapter" (or "Psalm", "Canto", etc.)
book.verseUnitName    // "Verse" (or "Line", etc.)
book.chapters       // ScriptureRefCollection of all chapter refs
book.hasData        // false if the book isn't in the dataset
```

### Chapter properties
```ts
chapter.number        // 3
chapter.osisID        // "John.3"
chapter.unitName      // "Chapter" (or "Prologue" if chapter 0)
chapter.citation      // "John 3"
chapter.longCitation  // "The Gospel According to John 3"
chapter.verses        // ScriptureRefCollection of all verse refs in this chapter
chapter.book          // Book
chapter.work          // Work
```

### Verse properties
```ts
verse.number        // 16
verse.osisID        // "John.3.16"
verse.unitName      // "Verse" (or "Title" if verse 0)
verse.citation      // "John 3:16"
verse.longCitation  // "The Gospel According to John 3:16"
verse.chapter       // BookChapter
verse.book          // Book
verse.work          // Work
```

---

## Navigation

Navigation is available at the verse, chapter, and book levels. All navigation returns a new `ScriptureRef` (or `null` at boundaries). Verse and chapter navigation rolls across book boundaries.

```ts
// Verse navigation (rolls across chapter and book boundaries)
ref.verse?.next()   // ScriptureRef | null
ref.verse?.prev()   // ScriptureRef | null

// Chapter navigation (rolls across book boundaries)
ref.chapter?.next() // ScriptureRef | null
ref.chapter?.prev() // ScriptureRef | null

// Book navigation
ref.book?.next()    // ScriptureRef pointing to next book | null
ref.book?.prev()    // ScriptureRef pointing to previous book | null

// Jump to start of a book or chapter
ref.book?.firstChapter()  // ScriptureRef at first chapter
ref.book?.firstVerse()    // ScriptureRef at first verse
ref.chapter?.firstVerse() // ScriptureRef at first verse of chapter
```

---

## Immutable Modification ("With-ers")

These return new `ScriptureRef` instances; they never mutate.

```ts
// Setting book clears chapter and verse
ref.withBook('Matt')          // ScriptureRef('Matt', null, null)

// Setting chapter clears verse
ref.withChapter(5)            // ScriptureRef('Matt', 5, null)

// Setting verse keeps book and chapter
ref.withVerse(3)              // ScriptureRef('Matt', 5, 3)

// Clearing components
ref.withChapter(null)         // removes chapter and verse
ref.withVerse(null)           // removes verse only
```

---

## ScriptureRefCollection

A lazy, iterable collection. Prefer iteration over `.toArray()` for large collections (e.g., all verses in a chapter or a wide range).

```ts
import ScriptureRefCollection from './src/ScriptureRef/ScriptureRefCollection.ts';

const col = ScriptureRef.fromRange('John 3:16-18');

col.length              // number of refs
col.citation            // combined citation string (e.g. "John 3:16-18")
col.isValid             // true if every ref in collection is valid
col.firstInvalid        // first invalid ScriptureRef | null

// Iteration
for (const ref of col) { ... }

// Array-like methods (lazy)
col.map(ref => ref.osisID)
col.filter(ref => ref.chapterNumber === 3)
col.find(ref => ref.verseNumber === 17)
col.some(ref => ref.isValid)
col.every(ref => ref.bookOsisID === 'John')
col.forEach(ref => ...)

// Materialize only when needed
col.toArray()   // ScriptureRef[]
```

---

## UI Input Ergonomics

When building a scripture reference input field that suggests what the user should type next:

```ts
ref.suggestedNextChar   // ' ' (space after book), ':' (colon after chapter), '' (done)

// Example for an autocomplete input:
if (!ref.hasBook) {
  // Show book list/autocomplete
} else if (!ref.hasChapter) {
  // Show chapter dropdown; append a space after book name
} else if (!ref.hasVerse) {
  // Show verse dropdown; append a colon after chapter number
} else {
  // Reference is complete
}
```

---

## Application Recipes

### Reader: navigate to next/previous chapter
```ts
const current = ScriptureRef.fromOsisID(savedOsisID);
const nextChapter = current.chapter?.next();
if (nextChapter) router.push(`/read/${nextChapter.osisID}`);
```

### Reader: render a chapter's verse list
```ts
const ref = ScriptureRef.fromCitation('John 3');
for (const verseRef of ref.chapter!.verses) {
  // verseRef.osisID, verseRef.verseNumber, verseRef.longCitation
}
```

### Reader: render table of contents for a work
```ts
const bible = ScriptureRef.fromOsisID('Gen').work!;
for (const bookRef of bible.books) {
  const book = bookRef.book!;
  // book.title, book.groups, book.traditions, book.chapters.length
}
```

### Annotations: use OSIS ID as the stable storage key
```ts
// Store
db.annotations.insert({ osisID: ref.osisID, text: noteText });

// Retrieve
const ref = ScriptureRef.fromOsisID(row.osisID);
const display = ref.longCitation ?? ref.osisID;
```

### Annotations: store a range
```ts
const col = ScriptureRef.fromRange('John 3:16-18');
for (const ref of col) {
  db.annotations.insert({ osisID: ref.osisID, annotationId });
}
```

### Cross-references: find related verses
```ts
// A cross-reference record holds two OSIS IDs
type CrossRef = { sourceOsisID: string; targetOsisID: string };

function displayCrossRef(xref: CrossRef) {
  const source = ScriptureRef.fromOsisID(xref.sourceOsisID);
  const target = ScriptureRef.fromOsisID(xref.targetOsisID);
  return `${source.longCitation} → ${target.longCitation}`;
}
```

### Cross-references: check if refs are in the same book or chapter
```ts
function sameBook(a: ScriptureRef, b: ScriptureRef) {
  return a.bookOsisID === b.bookOsisID;
}
function sameChapter(a: ScriptureRef, b: ScriptureRef) {
  return a.bookOsisID === b.bookOsisID && a.chapterNumber === b.chapterNumber;
}
```

### User input: validate and give feedback
```ts
const ref = ScriptureRef.fromCitation(userInput);
if (!ref.hasBook) {
  return 'Please enter a book name.';
}
const v = ref.validation;
if (v.errorCode === 'INVALID_BOOK') return `Unknown book: "${ref.bookOsisID}"`;
if (v.errorCode === 'INVALID_CHAPTER') return `${ref.book?.title} only has ${ref.book?.chapters.length} chapters.`;
if (v.errorCode === 'INVALID_VERSE') return `Chapter ${ref.chapterNumber} only has ${ref.chapter?.verses.length} verses.`;
```

### Book metadata: display book info panel
```ts
const ref = ScriptureRef.fromOsisID('Ps');
const book = ref.book!;
// book.title, book.subtitle, book.paratext
// book.authors.join(', ')
// book.traditions.join(' · ')
// book.groups  (e.g. ["Writings", "OT", "Ketuvim"])
// book.dateEarliest + '–' + book.dateLatest
// book.chapterUnitName  (e.g. "Psalm" not "Chapter")
// book.verseUnitName    (e.g. "Line" or "Verse")
```

### Range display: show a passage header
```ts
const col = ScriptureRef.fromRange('Rom 8:28-39');
const first = col.toArray()[0];
const last  = col.toArray()[col.length - 1];
// col.citation → "Rom 8:28-39"
// first.longCitation → full name with numbers
```

---

## Serialization / Storage

- **Single ref**: store `ref.osisID` (a string like `"John.3.16"` or `null`). Restore with `ScriptureRef.fromOsisID(stored)`.
- **Range/collection**: store an array of OSIS ID strings. Restore by constructing `new ScriptureRefCollection(ids)`.
- **JSON**: `ref.toJSON()` returns the OSIS ID string — `ScriptureRef` instances serialize correctly inside `JSON.stringify`.

---

## Common Pitfalls

- `withBook()` always clears chapter and verse — use `withChapter()` and `withVerse()` to set sub-components after the book.
- Navigation (`next()`/`prev()`) returns a `ScriptureRef`, not a `BookChapterVerse`. To continue verse-level navigation you must chain: `ref.verse?.next()?.verse?.next()`.
- `ScriptureRef.fromRange()` returns a `ScriptureRefCollection`, not a `ScriptureRef` — they have different APIs.
- Chapter 0 is a valid "prologue" chapter for some books; verse 0 is a valid "title" verse. Don't treat 0 as missing.
- `ref.book` / `ref.chapter` / `ref.verse` all return `null` if the ref lacks the necessary components — check `hasBook`, `hasChapter`, `hasVerse` before accessing, or use optional chaining (`?.`).
