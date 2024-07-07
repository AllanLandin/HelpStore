import { useRef, useState } from "react";
import Slider from "./Slider";
function ProductsDisplay() {
  const [categories, setCategories] = useState([
    "celular",
    "televisão",
    "notebook",
  ]);

  return (
    <>
      <div>
        {categories.map((category, index) => {
          return (
            <div key={index + 1}>
              <div key={index + 2}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </div>
              <Slider query={category} key={index + 3} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ProductsDisplay;
