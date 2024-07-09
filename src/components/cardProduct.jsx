import { useState } from "react";
import formatCurrency from "../utils/formatCurrency";
import AddCartBtn from "../components/AddCartBtn";

function CardProduct({ product }) {
  return (
    <div className="">
      <div className="flex flex-col gap-2 p-3 shadow border rounded">
        <img src={product.thumbnail.replace(/\w\.jpg/gi, "W.jpg")}></img>
        <h2>{product.title.slice(0, 40)}...</h2>

        <div className="flex justify-between">
          <p>{formatCurrency(product.price)}</p>
          <AddCartBtn />
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
