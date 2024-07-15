import { useNavigate } from "react-router-dom";

function BuyConfirmed() {
  const navigation = useNavigate();

  function closeBuyConfirmed() {
    navigation("/");
  }

  return (
    <div className="flex flex-col justify-center gap-9 text-center z-50 bg-green-500 fixed size-full left-0 top-0 ">
      <p className="text-3xl text-white">Compra finalizada com sucesso!</p>
      <button
        onClick={closeBuyConfirmed}
        className="text-lg bg-white hover:bg-slate-100 p-3 rounded uppercase self-center"
      >
        Ver mais produtos
      </button>
    </div>
  );
}

export default BuyConfirmed;
