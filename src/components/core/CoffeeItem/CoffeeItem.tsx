import type { CoffeeItemProps } from '../../../types/coffee.ts';
import { HeartMinus, HeartPlus } from 'lucide-react';
import { Button } from '../../ui/Button/Button.tsx';
import { useFavouriteCoffee } from '../../../hooks/useFavouriteCoffee.ts';

export function CoffeeItem({ coffeeItem }: CoffeeItemProps) {
  const { favouriteCoffeeItems, handleAddToFavourites, handleRemoveFromFavourites } = useFavouriteCoffee();
  const { image, title } = coffeeItem;

  const isFavourite = favouriteCoffeeItems?.some((favItem) => favItem.id === coffeeItem.id);

  return (
    <div className="relative w-70 h-70">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover rounded-md"
      />
      {isFavourite ? (
        <Button
          onClick={() => handleRemoveFromFavourites(coffeeItem)}
          styles="absolute top-3 right-3 transition-transform duration-500 hover:scale-120"
        >
          <HeartMinus className="text-[#d00606]" />
        </Button>
      ) : (
        <Button
          onClick={() => handleAddToFavourites(coffeeItem)}
          styles="absolute top-3 right-3 transition-transform duration-500 hover:scale-120"
        >
          <HeartPlus className="text-[#d00606]" />
        </Button>
      )}
    </div>
  );
}
