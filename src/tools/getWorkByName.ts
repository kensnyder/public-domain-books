import { worksLookup } from '../data/allData.ts';

export default function getWorkByName(name: string) {
  return worksLookup[String(name || '').toUpperCase()];
}
