import { useContext, useEffect, useState } from "react";
import productApi from "../api/fetchProducts";
import CardProduct from "./cardProduct";

function Slider({ query }) {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState({});

  useEffect(() => {
    productApi(query).then((data) => {
      setProducts(data.results);
      setLoading(false);
    });
  }, []);

  return (
    !loading && (
      <div className="flex gap-x-3 m-2">
        {products.map((product, index) => (
          <CardProduct key={index} product={product} />
        ))}
      </div>
    )
  );
}

export default Slider;
