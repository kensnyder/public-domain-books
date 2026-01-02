import { LRUCache } from 'lru-cache';
import type { WorkShape } from '~/types/data-shapes.ts';
import works from '../../data/research/works.json' with { type: 'json' };

const cache = new LRUCache<string, WorkShape>({
  max: 5000,
});

export default function getJsonWorkByName(name: string) {
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
