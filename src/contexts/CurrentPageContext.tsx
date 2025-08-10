import { createContext, type ReactNode, useState } from 'react';

interface Props {
  children: ReactNode;
}

interface CurrentPageContextProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

export const CurrentPageContext = createContext<CurrentPageContextProps | null>(null);

export const CurrentPageProvider = ({ children }: Props) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  return <CurrentPageContext.Provider value={{ currentPage, setCurrentPage }}>{children}</CurrentPageContext.Provider>;
};
