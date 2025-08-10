import { CoffeeItem } from '../CoffeeItem/CoffeeItem.tsx';

// TODO: CofeeItem type naming - colides with component name

interface Props {
  paginatedCoffeeItems: {
    description: string;
    id: number;
    image: string;
    ingredients: string[];
    title: string;
  }[];
}

export function CoffeeList({ paginatedCoffeeItems }: Props) {
  return (
    <div className="flex flex-wrap justify-center items-center gap-10 pt-10 mx-10">
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
