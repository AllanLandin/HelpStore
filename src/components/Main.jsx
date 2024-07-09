function Main() {
  return (
    <div className="flex flex-col items-center gap-5 sm:gap-2 my-3">
      <div className="flex sm:flex-row items-center gap-5">
        <p className="text-center text-3xl grow">
          Deixe ser <span className="text-red-500 font-bold">salvo</span> por
          nós. <span className="text-red-500 font-bold">Compre</span> os
          produtos da <span className="text-red-500 font-bold">Help</span>Store!
        </p>
        <img
          className="hidden sm:block sm:size-2/3"
          src="../src/assets/ilustration.jpg"
        ></img>
      </div>
      <a
        className="bg-red-500 text-white rounded p-3 hover:bg-red-600 text-center uppercase"
        href="#products"
      >
        Conheça os produtos
      </a>
    </div>
  );
}

export default Main;
