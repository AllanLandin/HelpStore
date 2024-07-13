import formatCurrency from "../utils/formatCurrency";
import { appContext } from "../contexts/appContext";
import { useContext } from "react";

function CartItem({ product }) {
  const { products, setProducts } = useContext(appContext);

  function deleteItem() {
    setProducts(products.filter((el) => el.id !== product.id));
  }

  return (
    <div className="flex justify-between gap-2 p-3 shadow-3lg rounded bg-slate-50 text-black h-1/4">
      <img
        className="object-cover"
        src={product.thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
      ></img>
      <div className="flex-grow flex flex-col justify-between text-xl">
        <h2 className="">{product.title.slice(0, 40)}...</h2>
        <p className="">{formatCurrency(product.price)}</p>
      </div>
      <button className="group" onClick={deleteItem}>
        <i className="text-lg group-hover:text-red-500 fa-solid fa-trash"></i>
      </button>
    </div>
  );
  q;
}

export default CartItem;
