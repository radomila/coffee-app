import { useFavouriteCoffee } from '../../../hooks/useFavouriteCoffee.ts';

export function FavouriteCoffeeList() {
  const { favouriteCoffeeItems } = useFavouriteCoffee();

  return (
    <>
      {favouriteCoffeeItems?.map((coffeeItem) => {
        return <div key={coffeeItem.id}>{coffeeItem.title}</div>;
      })}
    </>
  );
}
