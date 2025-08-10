import { Button } from '../../ui/Button/Button.tsx';
import { Menu, X } from 'lucide-react';
import type { NavigationProps } from '../../../types/coffee.ts';
import { Logo } from '../../ui/Logo/Logo.tsx';
import { NavigationList } from './NavigationList.tsx';

interface Props extends NavigationProps {
  toggleMenu: () => void;
}

export function DesktopNavigation({ toggleMenu, isOpen }: Props) {
  return (
    <div className="mx-4 my-2 flex items-center gap-3 md:justify-between md:mx-16 md:gap-0">
      <Button
        onClick={toggleMenu}
        styles="md:hidden text-gray-800"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </Button>
      <Logo />
      <NavigationList
        styles="hidden md:flex md:items-center md:justify-center md:gap-6"
        navItemStyles="px-3 py-2 font-medium text-lg hover:text-text-secondary hover:underline hover:decoration-2 hover:underline-offset-8"
      />
    </div>
  );
}
