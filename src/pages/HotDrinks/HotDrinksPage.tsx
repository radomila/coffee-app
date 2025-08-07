import { CoffeeList } from '../../components/core/CoffeeList/CoffeeList.tsx';
import { FavouriteCoffeeList } from '../../components/core/FavouriteCoffeeList/FavouriteCoffeeList.tsx';

export function HotDrinksPage() {
  return (
    <>
      <CoffeeList type="hot" />
      <FavouriteCoffeeList />
    </>
  );
}
