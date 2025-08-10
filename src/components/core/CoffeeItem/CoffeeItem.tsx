import type { CoffeeItemProps } from '../../../types/coffee.ts';
import { HeartMinus, HeartPlus } from 'lucide-react';
import { Button } from '../../ui/Button/Button.tsx';
import { useFavouriteCoffee } from '../../../hooks/useFavouriteCoffee.ts';
import { CoffeeItemImage } from '../CoffeeItemImage/CoffeeItemImage.tsx';

export function CoffeeItem({ coffeeItem }: CoffeeItemProps) {
  const { favouriteCoffeeItems, handleAddToFavourites, handleRemoveFromFavourites } = useFavouriteCoffee();
  const { image, title } = coffeeItem;

  const isFavourite = favouriteCoffeeItems?.some((favItem) => favItem.id === coffeeItem.id);

  return (
    <div className="relative">
      <CoffeeItemImage
        image={image}
        title={title}
      />
      {isFavourite ? (
        <Button
          onClick={() => handleRemoveFromFavourites(coffeeItem)}
          styles="absolute top-3 right-3 transition-transform duration-500 hover:scale-120"
        >
          <HeartMinus className="text-heart-icon" />
        </Button>
      ) : (
        <Button
          onClick={() => handleAddToFavourites(coffeeItem)}
          styles="absolute top-3 right-3 transition-transform duration-500 hover:scale-120"
        >
          <HeartPlus className="text-heart-icon" />
        </Button>
      )}
    </div>
  );
}
