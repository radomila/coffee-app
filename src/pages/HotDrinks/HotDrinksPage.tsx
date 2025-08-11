import { CoffeeList } from '../../components/core/CoffeeList/CoffeeList.tsx';
import { Pagination } from '../../components/ui/Pagination/Pagination.tsx';
import { useCoffeeData } from '../../hooks/useCoffeeData.ts';
import { usePaginatedItems } from '../../hooks/usePaginatedItems.ts';
import { CoffeeItemsEmptyState } from '../../components/core/CoffeeItemsEmptyState/CoffeeItemsEmptyState.tsx';
import { Frown } from 'lucide-react';
import { PageWrapper } from '../../components/layout/PageWrapper/PageWrapper.tsx';
import { ErrorAlert } from '../../components/ui/ErrorAlert/ErrorAlert.tsx';

export function HotDrinksPage() {
  const { coffeeData, error } = useCoffeeData('hot');
  const { paginatedCoffeeItems, numberOfPages } = usePaginatedItems({ allItems: coffeeData, itemsPerPage: 10 });

  if (error) {
    return (
      <PageWrapper>
        <ErrorAlert error={error} />
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      {coffeeData && coffeeData.length > 0 ? (
        <>
          <CoffeeList paginatedCoffeeItems={paginatedCoffeeItems} />
          {numberOfPages > 1 && <Pagination numberOfPages={numberOfPages} />}
        </>
      ) : (
        <CoffeeItemsEmptyState
          icon={<Frown />}
          title="No hot drinks available right now"
          description="Please, try again later or check out your internet connection"
        />
      )}
    </PageWrapper>
  );
}
