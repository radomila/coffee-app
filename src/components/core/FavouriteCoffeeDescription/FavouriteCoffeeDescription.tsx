interface Props {
  title: string;
  description: string;
  ingredients: string[];
}

export function FavouriteCoffeeDescription({ title, description, ingredients }: Props) {
  return (
    <div>
      <div className="text-lg font-semibold">{title}</div>
      <div className="text-sm">{description}</div>
      <div className="text-sm pt-2">
        <span className="font-semibold pr-2">Ingredients:</span>
        <span className="text-text-secondary">{ingredients}</span>
      </div>
    </div>
  );
}
