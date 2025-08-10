import type { ReactNode } from 'react';
import clsx from 'clsx';

interface Props {
  children: ReactNode;
  onClick: () => void;
  styles?: string;
  isDisabled?: boolean;
}

export function Button({ children, onClick, styles, isDisabled }: Props) {
  return (
    <button
      onClick={onClick}
      className={clsx(styles, isDisabled ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer')}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}
