import { useContext } from "react";
import { appContext } from "../contexts/appContext";
import CartItem from "./CartItem";

function Cart() {
  const context = useContext(appContext);
  const [products, setProducts] = context;
  console.log(context);
  return (
    <div className="z-50 bg-slate-500 w-full sm:w-1/2 md:1/3 h-full fixed top-0 right-0 p-3 sm:rounded-s-lg text-white">
      <div className="flex flex-col">
        <i className="fa-solid fa-xmark self-end text-3xl hover:cursor-pointer hover:text-red-500"></i>
      </div>
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
