import { createContext, type ReactNode, useState } from 'react';
import type { CoffeeItem } from '../types/coffee.ts';

interface Props {
  children: ReactNode;
}

interface CoffeeFavouritesContextType {
  favouriteCoffeeItems: CoffeeItem[] | null;
  handleAddToFavourites: (item: CoffeeItem) => void;
}

export const CoffeeFavouritesContext = createContext<CoffeeFavouritesContextType | null>(null);

export const CoffeeFavouritesProvider = ({ children }: Props) => {
  const [favouriteCoffeeItems, setFavouriteCoffeeItems] = useState<CoffeeItem[]>([]);

  const handleAddToFavourites = (item: CoffeeItem) => {
    setFavouriteCoffeeItems((prev) => [...prev, item]);
  };

  return <CoffeeFavouritesContext.Provider value={{ favouriteCoffeeItems, handleAddToFavourites }}>{children}</CoffeeFavouritesContext.Provider>;
};
