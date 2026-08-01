import process from 'node:process';
import { parseArgs } from 'node:util';
import findCitations from '../../src/tools/findCitations/findCitations.ts';

const { positionals } = parseArgs({
  args: process.argv.slice(2),
  allowPositionals: true,
});

const text = positionals[0];

if (!text) {
  console.error('Please provide text as the first argument.');
  process.exit(1);
}

const citations = findCitations(text);
console.log(citations);
