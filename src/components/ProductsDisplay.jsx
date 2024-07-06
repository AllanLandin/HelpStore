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
        {categories.map((category) => {
          return (
            <div>
              <div>{category.charAt(0).toUpperCase() + category.slice(1)}</div>
              <Slider query={category} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ProductsDisplay;
