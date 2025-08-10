import { CoffeeList } from '../../components/core/CoffeeList/CoffeeList.tsx';
import { Pagination } from '../../components/ui/Pagination/Pagination.tsx';
import { useCoffeeData } from '../../hooks/useCoffeeData.ts';
import { usePaginatedItems } from '../../hooks/usePaginatedItems.ts';
import { CoffeeItemsEmptyState } from '../../components/core/CoffeeItemsEmptyState/CoffeeItemsEmptyState.tsx';
import { Frown } from 'lucide-react';

export function IcedDrinksPage() {
  const { coffeeData } = useCoffeeData('iced');
  const { paginatedCoffeeItems, numberOfPages } = usePaginatedItems({ allItems: coffeeData, itemsPerPage: 10 });

  return (
    <div className="flex flex-col items-center justify-between pt-10 px-4 text-center">
      {coffeeData && coffeeData.length > 0 ? (
        <>
          <CoffeeList paginatedCoffeeItems={paginatedCoffeeItems} />
          {numberOfPages > 1 && <Pagination numberOfPages={numberOfPages} />}
        </>
      ) : (
        <CoffeeItemsEmptyState
          icon={<Frown />}
          title="No iced drinks available right now"
          description="Please, try again later or check out your internet connection"
        />
      )}
    </div>
  );
}
