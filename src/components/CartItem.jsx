import formatCurrency from "../utils/formatCurrency";
function CartItem({ product }) {
  return (
    <div className="overflow-auto flex justify-between gap-2 p-3 shadow-3lg rounded bg-slate-50 text-black h-1/4">
      <img
        className="object-cover"
        src={product.thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
      ></img>
      <div className="flex-grow flex flex-col justify-between text-xl">
        <h2 className="">{product.title.slice(0, 50)}...</h2>
        <p className="">{formatCurrency(product.price)}</p>
      </div>
      <button>
        <i className="text-lg hover:text-red-500 fa-solid fa-trash"></i>
      </button>
    </div>
  );
  q;
}

export default CartItem;
