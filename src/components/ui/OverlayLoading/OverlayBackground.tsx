import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function OverlayBackground({ children }: Props) {
  return <div className="fixed inset-0 bg-white/50 backdrop-blur-md z-60 flex justify-center items-center">{children}</div>;
}
