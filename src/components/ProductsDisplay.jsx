import { useState } from "react";
import Slider from "./Slider";
function ProductsDisplay() {
  const [categories, setCategories] = useState([
    "celular",
    "televisão",
    "notebook",
  ]);

  return (
    <>
      <article id="products">
        {categories.map((category, index) => {
          return (
            <div className="my-5" key={index + 1}>
              <p
                className="text-center text-slate-500 font-bold text-3xl my-5"
                key={index + 2}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </p>
              <Slider query={category} key={index + 3} />
            </div>
          );
        })}
      </article>
    </>
  );
}

export default ProductsDisplay;
