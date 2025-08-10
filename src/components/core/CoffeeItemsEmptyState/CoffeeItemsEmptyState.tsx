import type { ReactElement } from 'react';

interface Props {
  icon: ReactElement;
  title: string;
  description: string;
}

export function CoffeeItemsEmptyState({ icon, title, description }: Props) {
  return (
    <div className="flex flex-col justify-center items-center gap-4 max-w-7xl pt-20">
      <div>{icon}</div>
      <div className="text-2xl font-semibold">{title}</div>
      <div className="text-md">{description}</div>
    </div>
  );
}
