import { Button } from '../../ui/Button/Button.tsx';
import { X } from 'lucide-react';
import type { NavigationProps } from '../../../types/coffee.ts';
import { NavigationList } from './NavigationList.tsx';

interface Props extends NavigationProps {
  closeMenu: () => void;
}

export function MobileNavigation({ closeMenu, isOpen }: Props) {
  return (
    <div className={`fixed top-0 left-0 w-full h-full bg-white transition-transform duration-300 ease-in-out z-40 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="flex justify-end p-4">
        <Button onClick={closeMenu}>
          <X className="w-6 h-6 text-gray-800" />
        </Button>
      </div>
      <NavigationList
        styles="flex flex-col items-center justify-center h-full space-y-6 text-xl font-medium"
        navItemStyles="px-3 py-2"
      />
    </div>
  );
}
