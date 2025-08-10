import { Button } from '../../ui/Button/Button.tsx';
import { HeartMinus } from 'lucide-react';
import type { CoffeeItemProps } from '../../../types/coffee.ts';
import { useFavouriteCoffee } from '../../../hooks/useFavouriteCoffee.ts';
import { FavouriteCoffeeDescription } from '../FavouriteCoffeeDescription/FavouriteCoffeeDescription.tsx';
import { CoffeeItemImage } from '../CoffeeItemImage/CoffeeItemImage.tsx';

export function FavouriteCoffeeItem({ coffeeItem }: CoffeeItemProps) {
  const { id, image, title, description, ingredients } = coffeeItem;
  const { handleRemoveFromFavourites } = useFavouriteCoffee();

  return (
    <div
      key={id}
      className="flex flex-col md:flex-row items-center justify-between gap-5 md:gap-20 max-w-2xl text-justify pt-8"
    >
      <div className="flex flex-col md:flex-row items-center gap-5 max-w-70 md:max-w-xl">
        <CoffeeItemImage
          image={image}
          title={title}
          styles="md:min-w-24 md:max-w-24 md:h-24 md:rounded-full"
        />
        <FavouriteCoffeeDescription
          title={title}
          description={description}
          ingredients={ingredients}
        />
      </div>
      <Button onClick={() => handleRemoveFromFavourites(coffeeItem)}>
        <HeartMinus className="text-heart-icon" />
      </Button>
    </div>
  );
}
