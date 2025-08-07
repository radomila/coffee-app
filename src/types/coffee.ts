export interface NavigationProps {
  isOpen: boolean;
}

export interface NavLinkItem {
  label: string;
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
