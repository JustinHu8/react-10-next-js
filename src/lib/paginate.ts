import { Item } from './data';

// Function to paginate an array of items
// Returns a subset of items based on the current page and page size
// Example: paginate(items, 1, 10) returns the first 10 items
// Example: paginate(items, 2, 10) returns the next 10 items
export function paginate(items: Item[], currentPage: number, pageSize: number): Item[] {
  const startIndex = (currentPage - 1) * pageSize;
  return items.slice(startIndex, startIndex + pageSize);
}