import { useContext } from 'react';
import { CoffeeFavouritesContext } from '../contexts/CoffeeFavouritesContext.tsx';

export function useFavouriteCoffee() {
  const context = useContext(CoffeeFavouritesContext);

  if (!context) {
    throw new Error('useFavouriteCoffee must be used within a CoffeeFavouritesProvider');
  }

  return context;
}
