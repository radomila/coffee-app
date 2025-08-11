import { Button } from '../../ui/Button/Button.tsx';
import { Menu, X } from 'lucide-react';
import type { NavigationProps } from '../../../types/coffee.ts';
import { Logo } from '../../ui/Logo/Logo.tsx';
import { NavigationList } from './NavigationList.tsx';
import { useState } from 'react';

interface Props extends NavigationProps {
  toggleMenu: () => void;
}

export function DesktopNavigation({ toggleMenu, isOpen }: Props) {
  const [currentRouteId, setCurrentRouteId] = useState<string | null>(null);
  return (
    <div className="mx-4 my-2 flex items-center gap-3 md:justify-between md:mx-8 md:my-4 md:gap-0">
      <Button
        onClick={toggleMenu}
        styles="md:hidden text-black"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </Button>
      <Logo />
      <NavigationList
        styles="hidden md:flex md:items-center md:justify-center md:gap-6"
        navItemStyles="flex items-start gap-2 p-2 text-base hover:bg-gray-light hover:rounded-md hover:text-orange focus:text-orange focus:bg-orange-light focus:rounded-md"
        currentRouteId={currentRouteId}
        setCurrentRouteId={setCurrentRouteId}
      />
    </div>
  );
}
