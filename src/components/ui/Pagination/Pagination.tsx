import { Button } from '../Button/Button.tsx';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCurrentPage } from '../../../hooks/useCurrentPage.ts';

interface Props {
  numberOfItems: number | undefined;
  itemsPerPage: number;
}

export function Pagination({ numberOfItems, itemsPerPage }: Props) {
  const { currentPage, setCurrentPage } = useCurrentPage();

  const numberOfPages = Math.ceil(numberOfItems / itemsPerPage);
  const pages = Array.from({ length: numberOfPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center gap-8 pt-10">
      <Button onClick={() => setCurrentPage(currentPage - 1)}>
        <ChevronLeft />
      </Button>
      {pages.map((page) => {
        return (
          <Button
            key={page}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </Button>
        );
      })}
      <Button onClick={() => setCurrentPage(currentPage + 1)}>
        <ChevronRight />
      </Button>
    </div>
  );
}
