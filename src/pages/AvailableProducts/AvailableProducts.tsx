import { ProductList } from '../../components/ProductList/ProductList.tsx';
import { CoffeeFavouritesList } from '../../components/CoffeeFavouritesList/CoffeeFavouritesList.tsx';

export function AvailableProducts() {
  return (
    <>
      <ProductList productType="available" />
      <CoffeeFavouritesList />
    </>
  );
}
