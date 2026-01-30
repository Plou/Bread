import { breads } from './placeholder-data'

import {
  Bread
} from '@/app/lib/definitions'

export async function fetchFilteredBreads(
  query: string,
  currentPage: number
): Promise<Bread[] | undefined> {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return breads;
}

export async function fetchBreadsPages( query: string) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return 1;
}

export async function fetchBreadById( id: string) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return breads.find((bread) => bread.id === id);
}