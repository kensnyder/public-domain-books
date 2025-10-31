import { LRUCache } from 'lru-cache';
import works from '../../data/works/works.json';

type Work = (typeof works)[number];

const cache = new LRUCache<string, Work>({
  max: 5000,
});

export default function getWorkByName(name: string) {
  const lowerName = name.toLowerCase();

  const cached = cache.get(lowerName);
  if (cached) {
    return cached;
  }

  const result = works.find(
    (w) =>
      w.workOsisID.toLowerCase() === lowerName ||
      w.workTitle.toLowerCase() === lowerName ||
      (Array.isArray(w.aliases) &&
        w.aliases.some((a) => a.toLowerCase() === lowerName)),
  );

  cache.set(lowerName, result);
  return result;
}
