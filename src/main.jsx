import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ProductsOnCartProvider } from "./contexts/ProductContext.jsx";

// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductsOnCartProvider>
      <App />
    </ProductsOnCartProvider>
  </React.StrictMode>
);
