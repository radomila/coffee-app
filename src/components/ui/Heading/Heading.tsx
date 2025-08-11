import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function Heading({ children }: Props) {
  return <div className="text-3xl">{children}</div>;
}
