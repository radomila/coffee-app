import { useState } from 'react';

export function useCurrentPage() {
  const [currentPage, setCurrentPage] = useState<number>(1);

  return {
    currentPage,
    setCurrentPage,
  };
}
