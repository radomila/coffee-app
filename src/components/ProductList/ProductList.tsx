import { useData } from '../../hooks/useData.ts';
import { useCoffeeFavourites } from '../../hooks/useCoffeeFavourites.ts';

interface Props {
  productType: 'all' | 'available';
}

export function ProductList({ productType }: Props) {
  const { data } = useData();
  const { handleAddToFavourites } = useCoffeeFavourites();

  const filteredData = productType === 'available' ? data?.filter((item) => item.available) : data;

  return (
    <>
      {filteredData?.map((item, index) => {
        return (
          <div
            key={index}
            onClick={() => handleAddToFavourites(item)}
          >
            {item.name}
          </div>
        );
      })}
    </>
  );
}
