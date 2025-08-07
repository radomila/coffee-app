import type { CoffeeItem } from '../../../types/coffee.ts';
import { useFavouriteCoffee } from '../../../hooks/useFavouriteCoffee.ts';

interface Props {
  key: number;
  coffeeItem: CoffeeItem;
}

export function CoffeeItem({ coffeeItem }: Props) {
  const { handleAddToFavourites } = useFavouriteCoffee();
  const { title } = coffeeItem;

  return <div onClick={() => handleAddToFavourites(coffeeItem)}>{title}</div>;
}
