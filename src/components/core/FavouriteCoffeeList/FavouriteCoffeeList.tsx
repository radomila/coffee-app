import { FavouriteCoffeeItem } from '../FavouriteCoffeeItem/FavouriteCoffeeItem.tsx';
import type { CoffeeItem } from '../../../types/coffee.ts';

interface Props {
  paginatedCoffeeItems: CoffeeItem[];
}

export function FavouriteCoffeeList({ paginatedCoffeeItems }: Props) {
  return (
    <>
      {paginatedCoffeeItems?.map((coffeeItem) => {
        return (
          <FavouriteCoffeeItem
            key={coffeeItem.id}
            coffeeItem={coffeeItem}
          />
        );
      })}
    </>
  );
}
