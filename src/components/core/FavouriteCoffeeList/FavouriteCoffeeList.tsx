import { useFavouriteCoffee } from '../../../hooks/useFavouriteCoffee.ts';
import { FavouriteCoffeeItem } from '../FavouriteCoffeeItem/FavouriteCoffeeItem.tsx';
import { useCurrentPage } from '../../../hooks/useCurrentPage.ts';

interface Props {
  itemsPerPage: number;
}

export function FavouriteCoffeeList({ itemsPerPage }: Props) {
  const { favouriteCoffeeItems } = useFavouriteCoffee();
  const { currentPage } = useCurrentPage();

  const endIndex = currentPage * itemsPerPage;
  const startIndex = endIndex - itemsPerPage;

  const items = favouriteCoffeeItems?.slice(startIndex, endIndex);

  return (
    <>
      {items?.map((coffeeItem) => {
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
