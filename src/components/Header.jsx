import { useState, useContext } from "react";
import { appContext } from "../contexts/appContext";
import { useNavigate, Outlet } from "react-router-dom";
import Cart from "./Cart";

function Header() {
  const navigate = useNavigate();

  const { products, setProducts, modalIsVisible, setModalIsVisible } =
    useContext(appContext);

  function openModal() {
    setModalIsVisible(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const query = e.target[0].value;
    navigate(`/searchProduct?q=${query}`);
  }

  return (
    <div className="flex justify-between items-center gap-5 py-5">
      <div className="text-2xl">
        <span className="text-red-500 font-bold">Help</span>
        Store
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex grow max-w-xl justify-between rounded p-2 border border-current focus-within:border-red-500"
      >
        <input
          className="grow bg-transparent focus:outline-none placeholder:text-white-500"
          type="search"
          placeholder="Buscar Produto"
        ></input>
        <button type="submit">
          <i className="fa-solid fa-magnifying-glass hover:text-red-500"></i>
        </button>
      </form>
      <button onClick={openModal}>
        <i className="fa-solid fa-cart-shopping text-lg hover:text-red-500"></i>
      </button>
      <Cart />
    </div>
  );
}

export default Header;
