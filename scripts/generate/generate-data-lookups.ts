import books from '../../data/books/books.json' with { type: 'json' };
import works from '../../data/works/works.json' with { type: 'json' };

const tsDest = Bun.file(`${import.meta.dir}/../../src/data/allData.ts`);
const jsonDest = Bun.file(`${import.meta.dir}/../../data/metadata.json`);

const output = [];

output.push(`export const works = ${JSON.stringify(works, null, 2)};`);
output.push(`export const books = ${JSON.stringify(books, null, 2)};`);

await tsDest.write(output.join('\n\n'));
await jsonDest.write(
  JSON.stringify(
    {
      books,
      works,
    },
    null,
    2,
  ),
);
