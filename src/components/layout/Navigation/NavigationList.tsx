import { NavigationLink } from './NavigationLink.tsx';
import { Heart } from 'lucide-react';
import { useId } from 'react';

interface Props {
  styles: string;
  navItemStyles: string;
}

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Hot drinks', path: '/hot' },
  { label: 'Iced drinks', path: '/iced' },
  { label: <Heart />, path: '/favourites' },
];

export function NavigationList({ styles, navItemStyles }: Props) {
  const navItemId = useId();
  return (
    <ul className={styles}>
      {navItems.map((item) => (
        <NavigationLink
          key={navItemId}
          item={item}
          styles={navItemStyles}
        />
      ))}
    </ul>
  );
}
