#!/usr/bin/env bun
import process from 'node:process';
import { parseArgs } from 'node:util';
import * as tools from '../index.ts';

const { positionals, values } = parseArgs({
  args: process.argv.slice(2),
  allowPositionals: true,
  strict: false,
});

function help() {
  console.log(`Usage

./cli.ts <command> <text>

Commands

./cli.ts citationToOsisIDs "Gen 1:1-3,7"
Parses a citation string into an array of verse OSIS IDs

./cli.ts findCitations "Matthew read Gen 2:4-7 yesterday and Gen 3:1-10 today"
Returns an array of citations, indexes, and verse OSIS ID, one for each citation found

./cli.ts getBookByName "Genesis"
Retrieves a book by its name or alias

./cli.ts getBooksByWork "Bible"
Retrieves all books belonging to a specific sacred work

./cli.ts getChapterList "Gen"
Retrieves a list of chapters for a given book, including labels and verse counts

./cli.ts getWorkByName "Bible"
Retrieves a sacred work by its name or alias

./cli.ts osisToCitation "Gen.1.1"
Converts an OSIS ID string into human-readable citation strings

./cli.ts parseOsisID "Gen.1.1"
Parses an OSIS ID string into its components

./cli.ts parseReference "Genesis 1:1"
Parses a human-readable verse reference string into its components

./cli.ts validateOsisID "Gen.1.1"
Validates an OSIS ID string, checking for existing book, chapter, and verse
`);
}

if (values.help) {
  help();
  process.exit(0);
}

const functionName = positionals[0];
const argument = positionals[1];

if (!functionName) {
  console.error('Please provide a function name as the first argument.');
  help();
  process.exit(1);
}

if (!argument) {
  console.error('Please provide a string argument as the second argument.');
  help();
  process.exit(1);
}

// List of allowed functions that take a single string argument
const allowedFunctions: Record<string, (arg: string) => unknown> = {
  citationToOsisIDs: tools.citationToOsisIDs,
  findCitations: tools.findCitations,
  getBookByName: tools.getBookByName,
  getBooksByWork: tools.getBooksByWork,
  getChapterList: tools.getChapterList,
  getWorkByName: tools.getWorkByName,
  osisToCitation: tools.osisToCitation,
  parseOsisID: tools.parseOsisID,
  parseReference: tools.parseReference,
  validateOsisID: tools.validateOsisID,
};

if (!(functionName in allowedFunctions)) {
  console.error(`Unknown command "${functionName}"`);
  help();
  process.exit(1);
}

const fn = allowedFunctions[functionName];
const result = fn(argument);

console.log(result);
