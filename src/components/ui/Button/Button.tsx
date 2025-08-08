import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  onClick?: () => void;
  styles?: string;
}

export function Button({ children, onClick, styles }: Props) {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer ${styles}`}
    >
      {children}
    </button>
  );
}
