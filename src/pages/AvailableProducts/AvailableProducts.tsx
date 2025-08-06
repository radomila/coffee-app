import { ProductList } from '../../components/ProductList/ProductList.tsx';

export function AvailableProducts() {
  return (
    <>
      <ProductList productType="available" />
    </>
  );
}
