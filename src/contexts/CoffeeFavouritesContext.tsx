import { createContext, type ReactNode } from 'react';
import type { CoffeeItem } from '../types/coffee.ts';
import { usePersistedData } from '../hooks/usePersistedData.ts';

interface Props {
  children: ReactNode;
}

interface CoffeeFavouritesContextType {
  favouriteCoffeeItems: CoffeeItem[] | null;
  handleAddToFavourites: (item: CoffeeItem) => void;
  handleRemoveFromFavourites: (item: CoffeeItem) => void;
}

export const CoffeeFavouritesContext = createContext<CoffeeFavouritesContextType | null>(null);

export const CoffeeFavouritesProvider = ({ children }: Props) => {
  const [favouriteCoffeeItems, setFavouriteCoffeeItems] = usePersistedData<CoffeeItem[]>({
    key: 'favouriteCoffeeItems',
    initialValue: [],
  });

  const handleAddToFavourites = (item: CoffeeItem) => {
    setFavouriteCoffeeItems((prev) => [...prev, item]);
  };

  const handleRemoveFromFavourites = (item: CoffeeItem) => {
    setFavouriteCoffeeItems((prev) => prev.filter((i) => i.id !== item.id));
  };

  return <CoffeeFavouritesContext.Provider value={{ favouriteCoffeeItems, handleAddToFavourites, handleRemoveFromFavourites }}>{children}</CoffeeFavouritesContext.Provider>;
};
