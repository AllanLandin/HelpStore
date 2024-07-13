import { useContext } from "react";
import { appContext } from "../contexts/appContext";
import toast from "react-hot-toast";

function AddCartBtn({ product }) {
  const { products, setProducts } = useContext(appContext);

  function onAddProduct() {
    setProducts([product, ...products]);
    toast.success("Produto adicionado no carrinho!");
  }

  return (
    <button
      onClick={onAddProduct}
      className="flex items-center justify-center text-white font-bold text-lg bg-red-500 rounded-full size-8  hover:cursor-pointer hover:bg-red-600"
    >
      <i className="fa-sharp fa-regular fa-plus"></i>
    </button>
  );
}

export default AddCartBtn;
