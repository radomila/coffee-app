import { useState } from 'react';
import { DesktopNavigation } from './DesktopNavigation.tsx';
import { MobileNavigation } from './MobileNavigation.tsx';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-transparent px-4 py-6 shadow-lg relative z-50">
      <DesktopNavigation
        toggleMenu={toggleMenu}
        isOpen={isOpen}
      />

      <MobileNavigation
        closeMenu={closeMenu}
        isOpen={isOpen}
      />
    </nav>
  );
}
