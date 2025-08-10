import { v4 as uuidv4 } from 'uuid';
import { NavigationLink } from './NavigationLink.tsx';
import { Heart } from 'lucide-react';

interface Props {
  styles: string;
  navItemStyles: string;
}

const navItems = [
  { id: uuidv4(), label: 'Home', path: '/' },
  { id: uuidv4(), label: 'Hot drinks', path: '/hot' },
  { id: uuidv4(), label: 'Iced drinks', path: '/iced' },
  { id: uuidv4(), label: <Heart />, path: '/favourites' },
];

export function NavigationList({ styles, navItemStyles }: Props) {
  return (
    <ul className={styles}>
      {navItems.map((item) => (
        <NavigationLink
          key={item.id}
          item={item}
          styles={navItemStyles}
        />
      ))}
    </ul>
  );
}
