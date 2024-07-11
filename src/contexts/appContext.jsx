import { createContext, useState } from "react";

const appContext = createContext({});

function AppContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  return (
    <appContext.Provider
      value={[products, setProducts, modalIsVisible, setModalIsVisible]}
    >
      {children}
    </appContext.Provider>
  );
}

export { appContext, AppContextProvider };
