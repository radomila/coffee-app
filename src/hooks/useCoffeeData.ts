import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLoading } from './useLoading.ts';
import { useError } from './useError.ts';
import { URL } from '../constants.ts';
import type { CoffeeItem, CoffeeType } from '../types/coffee.ts';

export function useCoffeeData(type: CoffeeType) {
  const [coffeeData, setCoffeeData] = useState<CoffeeItem[] | null>([]);
  const { setLoading } = useLoading();
  const { setError } = useError();

  useEffect(() => {
    getCoffeeData();
  }, []);

  async function getCoffeeData() {
    setLoading(true);
    try {
      const response = await axios.get(`${URL}/${type}`);
      console.log(response.data);
      setCoffeeData(response.data);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  }

  return {
    coffeeData,
  };
}
