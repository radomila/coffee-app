interface Props {
  title: string;
  description: string;
  ingredients: string[];
}

export function FavouriteCoffeeDescription({ title, description, ingredients }: Props) {
  const formattedIngredientItems = Array.isArray(ingredients) ? ingredients : [ingredients];

  return (
    <div>
      <div className="text-lg font-semibold">{title}</div>
      <div className="text-sm">{description}</div>
      <div className="text-sm pt-2">
        <span className="font-semibold pr-2">Ingredients:</span>
        <span className="text-orange">{formattedIngredientItems.join(', ')}</span>
      </div>
    </div>
  );
}
