import { ProductList } from '../../components/ProductList/ProductList.tsx';
import { CoffeeFavouritesList } from '../../components/CoffeeFavouritesList/CoffeeFavouritesList.tsx';

export function Home() {
  return (
    <>
      <ProductList productType="all" />
      <CoffeeFavouritesList />
    </>
  );
}
