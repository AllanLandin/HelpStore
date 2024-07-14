import { useEffect, useState } from "react";
import productApi from "../api/fetchProducts";
import CardProduct from "./CardProduct";

function SearchResult({ query }) {
  const [products, setProducts] = useState({});
  useEffect((query) => {
    productApi(query).then((data) => setProducts(data));
  }, []);
  return (
    <div>
      {products.map((product) => (
        <CardProduct product={product} />
      ))}
    </div>
  );
}

export default SearchResult;
