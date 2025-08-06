import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLoading } from './useLoading.ts';
import { useError } from './useError.ts';
import { URL } from '../constants.ts';
import type { CoffeeItem } from '../types/data.ts';

export function useData() {
  const [data, setData] = useState<CoffeeItem[] | null>([]);
  const { setLoading } = useLoading();
  const { setError } = useError();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    setLoading(true);
    try {
      const response = await axios.get(URL);
      setData(response.data);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  }

  return {
    data,
  };
}
