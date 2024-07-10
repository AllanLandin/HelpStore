import { createContext, useState } from "react";

const productsOnCartContext = createContext({});

function ProductsOnCartProvider({ children }) {
  const [products, setProducts] = useState([]);

  return (
    <productsOnCartContext.Provider value={[products, setProducts]}>
      {children}
    </productsOnCartContext.Provider>
  );
}

export { productsOnCartContext, ProductsOnCartProvider };
