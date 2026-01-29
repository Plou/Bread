import { breads } from './placeholder-data'

export async function fetchFilteredBreads(
  query: string,
  currentPage: number
) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return breads;
}

export async function fetchBreadsPages( query: string) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return 1;
}