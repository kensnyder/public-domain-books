# Context

This public-domain-books project provides TypeScript functions for working with sacred works.
It also contains scripts to fetch the text of the works themselves along with metadata and AI analysis.

## General

- **CRITICAL:** State that you read `.junie/guidelines.md` every time you read these guidelines.
- **Support:** Consult docs/web for weak knowledge; ask if tasks are ambiguous or you're stuck (large files/output).
- **Environment:** Use `/tmp` for temporary files; see `README.md` for project-specific docs.
- **Runtime:** Use `bun` not `npm`.

## Domain-Specific Notes

- **Scripture:** Use camelCase OSIS-style identifiers including `workOsisID`, `bookOsisID`, `chapterOsisID`, `verseOsisID`.
- **Aliases:** Use existing functions to support works and books with a large number of equivalent names such as `1 Corinthians`, `1 Cor`, `1Cor`, etc.
- **Verse Notation:** Use existing functions to support common notations such as `1:2`, `1:2-3`, `1:2–3`, `1:2-3, 5`, `1:2-3; 5` etc.

## Style / Code Layout

- **Formatting:** Single statement per line. Explicit braces for `if`/`for`/`while` on new lines. No `return` on the same line as logic.
- **TypeScript:** Avoid `any`/`as any`; use `unknown` or proper interfaces.
- **Logic:** Avoid nested ternaries. Max 80 chars for ternary lines; otherwise use `if` blocks.
- **CLI:** If building CLI tools, use `import { parseArgs } from "node:util"`.
- **Imports:** Use relative imports.
- **Testing:** Use `bun:test` with describe->it->expect() in colocated `.spec.ts` files.
- **Arguments:** Functions that need 3+ input values should accept 1 argument object with named properties.

## Project Architecture

- **Scripts:** Scripts are organized by purpose within `scripts` with AI analysis (`ai`), compilation (`generation`), and import (`import`).
- **Script Helpers:** Defined in functions within `src/lib`.
- **Tools:** Functions exported from `index.ts` are found in `src/tools` and bundled for an npm package called `scripture-tools` into `dist` using `bun run build`. `.spec.ts` tests are colocated in each function's directory.
- **Data:** Tools can import compiled book data from `data/compiled/books-and-works.ts` to obtain metadata for works and books including names, aliases, chapter/verse counts.
- **Reading Data:** `data/compiled/books-and-works.json` exactly mirrors the contents and variable name exports of `data/compiled/books-and-works.ts` which you can parse with a tool to inspect the data. See the table below for a reference.

| export const name / JSON object key | `src/types/data-shapes.ts` type | Description                                                                                                                                          |
|-------------------------------------|---------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| works                               | `WorkShape[]`                   | List of sacred text volumes each with `workOsisID` property                                                                                          |
| books                               | `BookShape[]`                   | List of books and their metadata, connected to works by `workOsisID` property                                                                        |
| chapterCounts                       | `Record<string, number>`        | Lookup of chapter count by `book.bookOsisID`                                                                                                         |
| verseCounts                         | `Record<string, number[]>`      | Lookup of verse counts by `book.bookOsisID` and chapter index. It is one-based, so books without preface chapters always have 0 verses for index 0.  |
| worksLookup                         | `Record<string, number>`        | Lookup of work index (in `works` array) by `work.workOsisID`                                                                                         |
| booksLookup                         | `Record<string, number>`        | Lookup of book index (in `books` array) by `book.bookOsisID`                                                                                         |
| groupsLookup                        | `Record<string, number[]>`      | Lookup of book indexes (in `books` array) by a given group name. e.g. "GOSPELS" contains four indexes pointing to Matt, Mark, Luke, John in `books`. |

Note that all lookup keys are UPPERCASE.
