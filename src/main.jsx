import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ProductsOnCartProvider } from "./contexts/ProductContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductsOnCartProvider>
      <App />
    </ProductsOnCartProvider>
  </React.StrictMode>
);
