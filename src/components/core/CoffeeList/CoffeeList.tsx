import { useCoffeeData } from '../../../hooks/useCoffeeData.ts';
import type { CoffeeType } from '../../../types/coffee.ts';
import { CoffeeItem } from '../CoffeeItem/CoffeeItem.tsx';

interface ProductListProps {
  type: CoffeeType;
}

export function CoffeeList({ type }: ProductListProps) {
  const { coffeeData } = useCoffeeData(type);

  return (
    <>
      {coffeeData?.map((coffeeItem) => {
        return (
          <CoffeeItem
            key={coffeeItem.id}
            coffeeItem={coffeeItem}
          />
        );
      })}
    </>
  );
}
