import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function PageWrapper({ children }: Props) {
  return <div className="flex flex-col items-center justify-between pt-10 px-4 text-center">{children}</div>;
}
