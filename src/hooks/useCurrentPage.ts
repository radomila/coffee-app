import { CurrentPageContext } from '../contexts/CurrentPageContext.tsx';
import { useContext } from 'react';

export function useCurrentPage() {
  const context = useContext(CurrentPageContext);

  if (!context) {
    throw new Error('useCurrentPage must be used within a CoffeeFavouritesProvider');
  }

  return context;
}
