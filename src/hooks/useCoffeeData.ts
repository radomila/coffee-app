import { useEffect, useState } from 'react';
import axios from 'axios';
import { useOverlayLoading } from './useOverlayLoading.ts';
import { useError } from './useError.ts';
import { URL } from '../constants.ts';
import type { CoffeeItem, CoffeeType } from '../types/coffee.ts';

export function useCoffeeData(type: CoffeeType) {
  const [coffeeData, setCoffeeData] = useState<CoffeeItem[] | null>([]);
  const { showOverlay, hideOverlay } = useOverlayLoading();
  const { error, setError } = useError();

  useEffect(() => {
    getCoffeeData();
  }, []);

  async function getCoffeeData() {
    showOverlay();
    try {
      const response = await axios.get(`${URL}/${type}`);
      setCoffeeData(response.data);
    } catch (error) {
      if (error instanceof Error) {
        setError('Failed to fetch coffee data. Please try again later.');
      }
    } finally {
      hideOverlay();
    }
  }

  return {
    coffeeData,
    error,
  };
}
