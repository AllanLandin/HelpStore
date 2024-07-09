import { useState } from "react";
import formatCurrency from "../utils/formatCurrency";

function CardProduct({ product }) {
  const [quantity, setQuantity] = useState(0);

  return (
    <div>
      <div className="flex flex-col gap-2 p-3 shadow border rounded ">
        <img
          className="object-contain"
          src={product.thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
        ></img>
        <h2>{product.title}</h2>
        <p>{formatCurrency(product.price)}</p>
        <div>{quantity}</div>
      </div>
    </div>
  );
}

export default CardProduct;
