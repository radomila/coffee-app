import { useData } from '../../hooks/useData.ts';

export function ProductList() {
  const { data } = useData();
  return (
    <>
      {data?.map((item, index) => {
        return <div key={index}>{item.name}</div>;
      })}
    </>
  );
}
