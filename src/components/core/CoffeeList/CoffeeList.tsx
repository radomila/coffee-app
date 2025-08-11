import { CoffeeItem } from '../CoffeeItem/CoffeeItem.tsx';
import type { CoffeeItem as CoffeeItemType } from '../../../types/coffee.ts';

interface Props {
  paginatedCoffeeItems: CoffeeItemType[];
}

export function CoffeeList({ paginatedCoffeeItems }: Props) {
  return (
    <div className="flex flex-wrap justify-center items-center gap-10 pt-10">
      {paginatedCoffeeItems?.map((coffeeItem) => {
        return (
          <CoffeeItem
            key={coffeeItem.id}
            coffeeItem={coffeeItem}
          />
        );
      })}
    </div>
  );
}
