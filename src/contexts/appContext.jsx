import { createContext, useState } from "react";

const appContext = createContext({});

function AppContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [buyConfirmedIsVisible, setBuyConfirmedIsVisible] = useState(false);

  return (
    <appContext.Provider
      value={{
        products,
        setProducts,
        modalIsVisible,
        setModalIsVisible,
        buyConfirmedIsVisible,
        setBuyConfirmedIsVisible,
      }}
    >
      {children}
    </appContext.Provider>
  );
}

export { appContext, AppContextProvider };
