import clsx from 'clsx';

interface Props {
  image: string;
  title: string;
  className?: string;
}

export function CoffeeItemImage({ image, title, className }: Props) {
  return (
    <img
      src={image}
      alt={title}
      className={clsx('w-70 h-70 object-cover rounded-md', className)}
    />
  );
}
