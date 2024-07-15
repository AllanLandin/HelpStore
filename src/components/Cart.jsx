import { useContext } from "react";
import CartItem from "./CartItem";
import { appContext } from "../contexts/appContext";
import formatCurrency from "../utils/formatCurrency";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigation = useNavigate();
  const {
    products,
    setProducts,
    setBuyConfirmedIsVisible,
    modalIsVisible,
    setModalIsVisible,
  } = useContext(appContext);

  function deleteAllItems() {
    setProducts([]);
  }

  function closeModal() {
    setModalIsVisible(false);
  }

  function openBuyConfirmedComp() {
    navigation("/buyConfirm");
    deleteAllItems();
    closeModal();
  }

  return !modalIsVisible ? (
    <div className="h-full fixed top-0 right-0 p-3 translate-x-5 transition duration-150"></div>
  ) : (
    <div
      id="cart"
      className="z-50 bg-red-500 w-full sm:w-1/2 md:1/3 h-full fixed top-0 right-0 p-3 sm:rounded-s-lg text-white transition duration-150 flex flex-col gap-2 overflow-auto"
    >
      <button onClick={closeModal} className="flex flex-col w-full">
        <i className="fa-solid fa-xmark self-end text-3xl hover:cursor-pointer hover:text-red-500"></i>
      </button>
      <div className="flex justify-between border-b py-5">
        <h2 className="text-2xl underline mb-2">
          Carrinho ({products.length})
        </h2>
        <button
          className="bg-white rounded text-black p-2 hover:bg-slate-100"
          onClick={deleteAllItems}
        >
          Apagar tudo
        </button>
      </div>
      <ul className="flex flex-col gap-5 overflow-auto flex-grow underline underline-offset-8">
        {products.map((product, index) => (
          <CartItem key={index} product={product} />
        ))}
      </ul>
      <div className="flex flex-col gap-5 text-xl border-t py-2">
        <div className="flex justify-between">
          <p>Total de produtos ({products.length})</p>
          <p>
            {formatCurrency(
              products.reduce((acc, curr) => acc + curr.price, 0)
            )}
          </p>
        </div>
        {products.length > 0 && (
          <button
            onClick={openBuyConfirmedComp}
            className="bg-green-500 rounded hover:bg-green-300 p-2"
          >
            Finalizar compra
          </button>
        )}
      </div>
    </div>
  );
}

export default Cart;
