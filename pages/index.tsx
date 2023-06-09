import ProductList from "@/components/ProductList";
import { useQuery } from "@tanstack/react-query";
import { products } from "@prisma/client";

export default function Home() {
  const getProductFetch = async () => {
    const res = await fetch("/api/get-products");
    const data = await res.json();
    return data.items;
  };
  const { data: productList } = useQuery<products[]>(["getProduct"], () =>
    getProductFetch()
  );
  return (
    <main>
      <ProductList productList={productList as products[]} />
    </main>
  );
}
