import { useContext, useEffect, useState } from "react";

import productApi from "../api/fetchProducts";
import CardProduct from "./CardProduct";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
      <Swiper
        className=""
        modules={[Navigation, Pagination, A11y]}
        navigation
        slidesPerView={4}
        pagination={{ clickable: true }}
        grabCursor="true"
        slid
      >
        {products.slice(0, 20).map((product, index) => (
          <SwiperSlide key={index} className="m-2">
            <CardProduct className="" key={index} product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    )
  );
}

export default Slider;
