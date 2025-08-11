import { v4 as uuidv4 } from 'uuid';
import { NavigationLink } from './NavigationLink.tsx';
import { CupSoda, Flame, Heart, House } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  styles: string;
  navItemStyles: string;
  currentRouteId?: string | null;
  setCurrentRouteId?: ((id: string | null) => void | undefined) | undefined;
}

const navItems = [
  { id: uuidv4(), icon: <House />, label: 'Home', path: '/' },
  { id: uuidv4(), icon: <Flame />, label: 'Hot drinks', path: '/hot' },
  { id: uuidv4(), icon: <CupSoda />, label: 'Iced drinks', path: '/iced' },
  { id: uuidv4(), icon: <Heart />, label: 'Favourites', path: '/favourites' },
];

export function NavigationList({ styles, navItemStyles, currentRouteId, setCurrentRouteId }: Props) {
  return (
    <ul className={styles}>
      {navItems.map((item) => (
        <NavigationLink
          key={item.id}
          item={item}
          onClick={() => setCurrentRouteId && setCurrentRouteId(item.id)}
          styles={clsx(navItemStyles, currentRouteId === item.id && 'text-orange bg-orange-light rounded-md')}
        />
      ))}
    </ul>
  );
}
