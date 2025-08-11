import { Link } from 'react-router-dom';
import type { NavLinkItem } from '../../../types/coffee.ts';

interface Props {
  item: NavLinkItem;
  onClick?: () => void;
  styles?: string;
}

export function NavigationLink({ item, onClick, styles }: Props) {
  return (
    <li>
      <Link
        onClick={onClick}
        className={styles}
        to={item.path}
      >
        {' '}
        {item.icon}
        {item.label}
      </Link>
    </li>
  );
}
