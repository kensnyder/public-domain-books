import { LRUCache } from 'lru-cache';
import type { BookShape } from '~/types/data-shapes.ts';
import books from '../../data/research/books.json' with { type: 'json' };

const cache = new LRUCache<string, BookShape>({
  max: 5000,
});

export default function getJsonBookByName(name: string) {
  const upperName = name.toUpperCase().trim().replace(/\.$/, '');

  const cached = cache.get(upperName);
  if (cached) {
    return cached;
  }

  const result = books.find(
    (w) =>
      w.bookOsisID.toUpperCase() === upperName ||
      w.bookName.toUpperCase() === upperName ||
      w.paratext === upperName ||
      (Array.isArray(w.aliases) &&
        w.aliases.some((a) => a.toUpperCase() === upperName)),
  );

  cache.set(upperName, result);
  return result;
}
