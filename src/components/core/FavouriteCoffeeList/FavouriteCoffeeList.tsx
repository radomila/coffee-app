import { useFavouriteCoffee } from '../../../hooks/useFavouriteCoffee.ts';
import { FavouriteCoffeeItem } from '../FavouriteCoffeeItem/FavouriteCoffeeItem.tsx';

export function FavouriteCoffeeList() {
  const { favouriteCoffeeItems } = useFavouriteCoffee();

  return (
    <>
      {favouriteCoffeeItems?.map((coffeeItem) => {
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
