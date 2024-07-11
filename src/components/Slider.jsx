import { useEffect, useState } from "react";

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
        autoHeight={true}
        spaceBetween={20}
        modules={[Navigation, Pagination, A11y]}
        navigation
        grabCursor="true"
        style={{ width: "100%", height: "max-content" }}
        breakpoints={{
          100: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          500: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          940: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4.5,
            spaceBetween: 10,
          },
        }}
      >
        {products.slice(0, 20).map((product, index) => (
          <SwiperSlide key={index}>
            <CardProduct key={index} product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    )
  );
}

export default Slider;
