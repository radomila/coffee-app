import { NavigationLink } from './NavigationLink.tsx';

interface Props {
  styles: string;
  navItemStyles: string;
}

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Hot drinks', path: '/hot' },
  { label: 'Iced drinks', path: '/iced' },
];

export function NavigationList({ styles, navItemStyles }: Props) {
  return (
    <ul className={styles}>
      {navItems.map((item) => (
        <NavigationLink
          key={item.label}
          item={item}
          styles={navItemStyles}
        />
      ))}
    </ul>
  );
}
