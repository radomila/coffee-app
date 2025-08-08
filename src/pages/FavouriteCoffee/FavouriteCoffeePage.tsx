import { FavouriteCoffeeList } from '../../components/core/FavouriteCoffeeList/FavouriteCoffeeList.tsx';
import { Heading } from '../../components/ui/Heading/Heading.tsx';
import { useFavouriteCoffee } from '../../hooks/useFavouriteCoffee.ts';

export function FavouriteCoffeePage() {
  const { favouriteCoffeeItems } = useFavouriteCoffee();
  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-10 px-4 text-center">
      <div className="w-full max-w-2xl text-left">
        <Heading>Favourites</Heading>
        <div className="flex gap-2 text-md py-5">You have {favouriteCoffeeItems?.length} favourite drinks in your inventory</div>
        <hr className="h-px text-gray-200"></hr>
        <FavouriteCoffeeList />
      </div>
    </div>
  );
}
