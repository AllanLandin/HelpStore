import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex justify-between items-center gap-5 py-5">
      <div className="text-2xl">
        <span className="text-red-500 font-bold">Help</span>
        Store
      </div>
      <form className="flex grow max-w-xl justify-between rounded p-2 border focus-within:border-red-500">
        <input
          className="bg-transparent focus:outline-none placeholder:text-white-500"
          type="search"
          placeholder="Buscar Produto"
        ></input>
        <button type="submit">
          <i className="fa-solid fa-magnifying-glass hover:text-red-500"></i>
        </button>
      </form>
      <button>
        <i className="fa-solid fa-cart-shopping text-lg hover:text-red-500"></i>
      </button>
    </div>
  );
}

export default Header;
