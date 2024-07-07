import { useContext, useEffect, useState } from "react";
import productApi from "../api/fetchProducts";
import CardProduct from "./CardProduct";
import "swiper/css";

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
      <swiper-container>
        {products.map((product, index) => (
          <swiper-slide key={index} class="m-2">
            <CardProduct key={index} product={product} />
          </swiper-slide>
        ))}
      </swiper-container>
    )
  );
}

export default Slider;
