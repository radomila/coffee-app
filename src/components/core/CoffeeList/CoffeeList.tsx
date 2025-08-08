import { useCoffeeData } from '../../../hooks/useCoffeeData.ts';
import type { CoffeeType } from '../../../types/coffee.ts';
import { CoffeeItem } from '../CoffeeItem/CoffeeItem.tsx';

interface ProductListProps {
  type: CoffeeType;
}

export function CoffeeList({ type }: ProductListProps) {
  const { coffeeData } = useCoffeeData(type);

  return (
    <div className="flex flex-wrap justify-center items-center gap-10 pt-10 mx-10">
      {coffeeData?.map((coffeeItem) => {
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
