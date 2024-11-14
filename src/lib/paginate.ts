import { Item } from './data';

export function paginate(items: Item[], currentPage: number, pageSize: number): Item[] {
  const startIndex = (currentPage - 1) * pageSize;
  return items.slice(startIndex, startIndex + pageSize);
}