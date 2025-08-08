import { Button } from '../../ui/Button/Button.tsx';
import { HeartMinus } from 'lucide-react';
import type { CoffeeItemProps } from '../../../types/coffee.ts';
import { useFavouriteCoffee } from '../../../hooks/useFavouriteCoffee.ts';

export function FavouriteCoffeeItem({ coffeeItem }: CoffeeItemProps) {
  const { id, image, title, description, ingredients } = coffeeItem;
  const { handleRemoveFromFavourites } = useFavouriteCoffee();

  return (
    <div
      key={id}
      className="flex items-center justify-between gap-20 max-w-2xl text-justify pt-10"
    >
      <div className="flex items-center gap-5">
        <img
          src={image}
          alt={title}
          className="min-w-24 max-w-24 h-24 object-cover rounded-full"
        />
        <div>
          <div className="text-lg font-semibold">{title}</div>
          <div className="text-sm">{description}</div>
          <div className="text-sm pt-2">
            <span className="font-semibold pr-2">Ingredients:</span>
            <span className="text-orange-400">{ingredients}</span>
          </div>
        </div>
      </div>
      <Button onClick={() => handleRemoveFromFavourites(coffeeItem)}>
        <HeartMinus className="text-[#d00606]" />
      </Button>
    </div>
  );
}
