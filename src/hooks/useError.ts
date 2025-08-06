import { useState } from 'react';

export function useError() {
  const [error, setError] = useState<string>('');

  return {
    isError: error,
    setError,
  };
}
