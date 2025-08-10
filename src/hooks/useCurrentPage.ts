import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

export function useCurrentPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const firstPage = 1;
  const currentPage = Number(searchParams.get('page')) || firstPage;

  const setCurrentPage = (page: number) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('page', page.toString());
    setSearchParams(newParams);
  };

  useEffect(() => {
    if (!searchParams.get('page')) {
      setCurrentPage(firstPage);
    }
  }, [searchParams]);

  return { currentPage, setCurrentPage };
}
