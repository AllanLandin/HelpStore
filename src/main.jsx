import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";
import { AppContextProvider } from "src/contexts/appContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
      <Toaster position="bottom-right" />
    </AppContextProvider>
  </React.StrictMode>
);
