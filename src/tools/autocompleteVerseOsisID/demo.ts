import process from 'node:process';
import * as readline from 'node:readline';
import { parseArgs } from 'node:util';
import autocompleteVerseOsisID from './autocompleteVerseOsisID.ts';

const { values } = parseArgs({
  options: {
    collections: {
      type: 'string',
    },
    limit: {
      type: 'string',
      default: '10',
    },
  },
  strict: false,
});

const collections = String(values.collections || '').split(',') ?? [];
const limit = Number.parseInt(values.limit as string, 10);

readline.emitKeypressEvents(process.stdin);

if (process.stdin.isTTY) {
  process.stdin.setRawMode(true);
}

let input = '';
let lastSuggestions: string[] = [];

function clearSuggestions() {
  if (lastSuggestions.length > 0) {
    // Move to the end of suggestions
    process.stdout.write(`\x1B[${lastSuggestions.length + 1}B`);
    // Clear lines from bottom up
    for (let i = 0; i <= lastSuggestions.length; i++) {
      process.stdout.write('\x1B[2K\x1B[A');
    }
    process.stdout.write('\x1B[G');
  } else {
    // Just clear the current line
    process.stdout.write('\x1B[2K\x1B[G');
  }
}

function refresh() {
  clearSuggestions();
  process.stdout.write(
    `Type OsisID (collections:=${collections.join(',') || '(all)'}; limit=${limit}): ${input}`,
  );

  const suggestions = autocompleteVerseOsisID({
    text: input,
    limit,
    collections,
  });

  if (suggestions.length > 0) {
    process.stdout.write('\n');
    for (const suggestion of suggestions) {
      process.stdout.write(`  > ${suggestion}\n`);
    }
    // Move cursor back up
    process.stdout.write(`\x1B[${suggestions.length + 1}A`);
    // Move cursor to the end of the input line
    const promptLen =
      `Type OsisID (collections: ${collections.join(',') || 'All'}): `.length;
    process.stdout.write(`\x1B[${promptLen + input.length + 1}G`);
  }
}

console.log('Autocomplete Demo (Ctrl+C to exit)');
refresh();

process.stdin.on('keypress', (str, key) => {
  if (key.ctrl && key.name === 'c') {
    clearSuggestions();
    if (process.stdin.isTTY) {
      process.stdin.setRawMode(false);
    }
    process.exit();
  }

  if (key.name === 'backspace') {
    input = input.slice(0, -1);
  } else if (key.name === 'delete') {
    input = '';
  } else if (str && str.length === 1 && !key.ctrl && !key.meta) {
    input += str;
  }

  // Clear suggestions before redraw
  const suggestions = autocompleteVerseOsisID({
    text: input,
    limit,
    collections,
  });
  lastSuggestions = suggestions;

  refresh();
});
