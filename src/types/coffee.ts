import { type ReactElement } from 'react';

export interface CoffeeItemProps {
  key: number;
  coffeeItem: CoffeeItem;
}

export interface NavigationProps {
  isOpen: boolean;
}

export interface NavLinkItem {
  icon: ReactElement;
  label: string | ReactElement;
  path: string;
}

export type CoffeeType = 'hot' | 'iced';

export interface CoffeeItem {
  description: string;
  id: number;
  image: string;
  ingredients: string[];
  title: string;
}
