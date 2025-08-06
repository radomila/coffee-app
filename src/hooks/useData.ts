import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLoading } from './useLoading.ts';
import { useError } from './useError.ts';

export function useData() {
  const [data, setData] = useState([]);
  const { setLoading } = useLoading();
  const { setError } = useError();

  const URL = import.meta.env.VITE_DATA_URL;

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
