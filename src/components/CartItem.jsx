import formatCurrency from "../utils/formatCurrency";
function CartItem({ product }) {
  return (
    <div className="flex gap-2 p-3 shadow-lg rounded bg-slate-500">
      <img
        className="size-1/3 object-contain"
        src={product.thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
      ></img>
      <div className="flex flex-col justify-between text-xl">
        <h2 className="">{product.title.slice(0, 60)}...</h2>
        <p className="">{formatCurrency(product.price)}</p>
      </div>
    </div>
  );
}

export default CartItem;
