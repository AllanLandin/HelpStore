import { useContext } from "react";
import CartItem from "./CartItem";
import { appContext } from "../contexts/appContext";

function Cart() {
  const [products, setProducts, modalIsVisible, setModalIsVisible] =
    useContext(appContext);

  function closeModal() {
    setModalIsVisible(false);
  }

  return !modalIsVisible ? (
    <div className="h-full fixed top-0 right-0 p-3 translate-x-5 transition duration-150"></div>
  ) : (
    <div
      id="cart"
      className="z-50 bg-red-800 w-full sm:w-1/2 md:1/3 h-full fixed top-0 right-0 p-3 sm:rounded-s-lg text-white transition duration-150"
    >
      <button onClick={closeModal} className="flex flex-col">
        <i className="fa-solid fa-xmark self-end text-3xl hover:cursor-pointer hover:text-red-500"></i>
      </button>
      <div>
        <h2 className="text-xl underline text-center mb-2">Carrinho</h2>
      </div>
      <ul className="flex flex-col gap-5 scroll-auto">
        {products.map((product) => (
          <CartItem product={product} />
        ))}
      </ul>
    </div>
  );
}

export default Cart;
