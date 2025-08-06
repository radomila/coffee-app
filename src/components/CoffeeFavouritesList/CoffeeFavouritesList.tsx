import { useCoffeeFavourites } from '../../hooks/useCoffeeFavourites.ts';

export function CoffeeFavouritesList() {
  const { favouriteCoffeeItems } = useCoffeeFavourites();

  return (
    <>
      {favouriteCoffeeItems?.map((coffeeItem, index) => {
        return <div key={index}>{coffeeItem.name}</div>;
      })}
    </>
  );
}
