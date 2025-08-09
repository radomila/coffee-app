export function getCoffeeItem(key: string) {
  try {
    const coffeeItem = window.localStorage.getItem(key);
    return coffeeItem ? JSON.parse(coffeeItem) : undefined;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
}
