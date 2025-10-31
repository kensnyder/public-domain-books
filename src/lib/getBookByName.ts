import { LRUCache } from 'lru-cache';
import books from '../../data/books/books.json';

type Book = (typeof books)[number];

const cache = new LRUCache<string, Book>({
  max: 5000,
});

export default function getBookByName(name: string) {
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
