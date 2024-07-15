import { useState, useContext } from "react";
import { appContext } from "../contexts/appContext";
import { Link, useNavigate } from "react-router-dom";
import Cart from "./Cart";
import fetchProducts from "../api/fetchProducts";

function Header() {
  const navigate = useNavigate();

  const {
    products,
    setProducts,
    modalIsVisible,
    setModalIsVisible,
    productsSearched,
    setProductsSearched,
  } = useContext(appContext);

  function openModal() {
    setModalIsVisible(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const query = e.target[0].value;
    fetchProducts(query).then((data) => {
      setProductsSearched(data.results);
      navigate(`/searchProduct?q=${query}`);
    });
  }

  return (
    <div className="flex justify-between items-center gap-5 py-5">
      <Link to="/" className="text-2xl">
        <span className="text-red-500 font-bold">Help</span>
        Store
      </Link>
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
