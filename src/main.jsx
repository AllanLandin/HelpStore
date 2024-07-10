import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ProductsOnCartProvider } from "./contexts/ProductContext.jsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductsOnCartProvider>
      <App />
      <Toaster position="bottom-right" />
    </ProductsOnCartProvider>
  </React.StrictMode>
);
