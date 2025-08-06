import { useContext } from 'react';
import { CoffeeFavouritesContext } from '../contexts/CoffeeFavouritesContext.tsx';

export function useCoffeeFavourites() {
  const context = useContext(CoffeeFavouritesContext);

  if (!context) {
    throw new Error('useCoffeeFavourites must be used within a CoffeeFavouritesProvider');
  }

  return context;
}
