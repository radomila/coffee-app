import { useEffect, useState } from 'react';
import { getCoffeeItem } from '../utils/LocalStorage/getCoffeeItem.ts';
import { setCoffeeItem } from '../utils/LocalStorage/setCoffeeItem.tsx';

interface Props<T> {
  key: string;
  initialValue: T;
}

export function usePersistedData<T>({ key, initialValue }: Props<T>) {
  const [value, setValue] = useState(() => {
    const item = getCoffeeItem(key);
    return (item as T) || initialValue;
  });

  useEffect(() => {
    setCoffeeItem(key, value);
  }, [value]);

  return [value, setValue] as const;
}
