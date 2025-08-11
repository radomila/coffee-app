import { FavouriteCoffeeList } from '../../components/core/FavouriteCoffeeList/FavouriteCoffeeList.tsx';
import { Heading } from '../../components/ui/Heading/Heading.tsx';
import { useFavouriteCoffee } from '../../hooks/useFavouriteCoffee.ts';
import { Pagination } from '../../components/ui/Pagination/Pagination.tsx';
import { usePaginatedItems } from '../../hooks/usePaginatedItems.ts';
import { CoffeeItemsEmptyState } from '../../components/core/CoffeeItemsEmptyState/CoffeeItemsEmptyState.tsx';
import { HeartIcon } from 'lucide-react';
import { PageWrapper } from '../../components/layout/PageWrapper/PageWrapper.tsx';

export function FavouriteCoffeePage() {
  const { favouriteCoffeeItems } = useFavouriteCoffee();
  const { paginatedCoffeeItems, numberOfPages } = usePaginatedItems({ allItems: favouriteCoffeeItems, itemsPerPage: 4 });

  return (
    <PageWrapper>
      <div className="w-full max-w-2xl text-left">
        <Heading>Favourites</Heading>
        <div className="flex gap-2 text-md py-4">You have {favouriteCoffeeItems?.length} favourite drinks in your inventory</div>
        <hr className="h-px text-gray"></hr>
        <FavouriteCoffeeList paginatedCoffeeItems={paginatedCoffeeItems} />
      </div>
      {numberOfPages > 1 && <Pagination numberOfPages={numberOfPages} />}
      {favouriteCoffeeItems?.length === 0 && (
        <CoffeeItemsEmptyState
          icon={<HeartIcon />}
          title="No items in your favourites"
          description="You can add products to your list by clicking on the heart icon"
        />
      )}
    </PageWrapper>
  );
}
