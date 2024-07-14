import { useContext } from "react";
import { appContext } from "../contexts/appContext";

function BuyConfirmed() {
  const { buyConfirmedIsVisible, setBuyConfirmedIsVisible } =
    useContext(appContext);

  function closeBuyConfirmed() {
    setBuyConfirmedIsVisible(false);
  }

  return (
    buyConfirmedIsVisible && (
      <div className="flex flex-col justify-center gap-9 text-center z-50 bg-green-500 fixed size-full left-0 top-0 ">
        <p className="text-7xl text-white">Compra finalizada com sucesso!</p>
        <button
          onClick={closeBuyConfirmed}
          className="text-5xl bg-white hover:bg-slate-100 p-6 rounded uppercase self-center"
        >
          Ver mais produtos
        </button>
      </div>
    )
  );
}

export default BuyConfirmed;
