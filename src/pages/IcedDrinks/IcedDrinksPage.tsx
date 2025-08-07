import { CoffeeList } from '../../components/core/CoffeeList/CoffeeList.tsx';
import { FavouriteCoffeeList } from '../../components/core/FavouriteCoffeeList/FavouriteCoffeeList.tsx';

export function IcedDrinksPage() {
  return (
    <>
      <CoffeeList type="iced" />
      <FavouriteCoffeeList />
    </>
  );
}
