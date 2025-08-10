import type { CoffeeItem } from '../types/coffee.ts';
import { useCurrentPage } from './useCurrentPage.ts';

interface Props {
  allItems?: CoffeeItem[] | null;
  itemsPerPage: number;
}

export function usePaginatedItems({ allItems, itemsPerPage }: Props) {
  const { currentPage } = useCurrentPage();

  const endIndex = currentPage * itemsPerPage;
  const startIndex = endIndex - itemsPerPage;

  const paginatedCoffeeItems = allItems?.slice(startIndex, endIndex) ?? [];
  const numberOfPages = allItems ? Math.ceil(allItems.length / itemsPerPage) : 0;

  return { paginatedCoffeeItems, numberOfPages };
}
