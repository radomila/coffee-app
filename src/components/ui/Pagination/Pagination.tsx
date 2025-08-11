import { Button } from '../Button/Button.tsx';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { useCurrentPage } from '../../../hooks/useCurrentPage.ts';
import clsx from 'clsx';

interface Props {
  numberOfPages: number;
}

export function Pagination({ numberOfPages }: Props) {
  const { currentPage, setCurrentPage } = useCurrentPage();

  const pagesNumbers = numberOfPages > 0 ? Array.from({ length: numberOfPages }, (_, i) => i + 1) : [];

  return (
    <div className="flex items-center gap-8 pt-10">
      <Button
        onClick={() => setCurrentPage(1)}
        isDisabled={currentPage === 1}
      >
        <ChevronsLeft />
      </Button>
      <Button
        onClick={() => setCurrentPage(currentPage - 1)}
        isDisabled={currentPage === 1}
      >
        <ChevronLeft />
      </Button>
      {pagesNumbers.map((page) => {
        return (
          <Button
            key={page}
            onClick={() => setCurrentPage(page)}
            styles={clsx(page === currentPage && 'bg-orange px-5 py-3 text-white rounded-md')}
          >
            {page}
          </Button>
        );
      })}
      <Button
        onClick={() => setCurrentPage(currentPage + 1)}
        isDisabled={currentPage === numberOfPages}
      >
        <ChevronRight />
      </Button>
      <Button
        onClick={() => setCurrentPage(numberOfPages)}
        isDisabled={currentPage === numberOfPages}
      >
        <ChevronsRight />
      </Button>
    </div>
  );
}
