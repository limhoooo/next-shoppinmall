import { products } from "@prisma/client";
import { format } from "date-fns";
import React from "react";

interface PropsType {
  productList: products[];
}
export default function ItemList({ productList }: PropsType) {
  return (
    <div>
      {productList &&
        productList.map((product) => (
          <div key={product.id}>
            <p>{product.name}</p>
            <p>
              등록일자 : {format(new Date(product.createdAt), "yyyy년 M월 d일")}
            </p>
            <p>{product.price}</p>
          </div>
        ))}
    </div>
  );
}
