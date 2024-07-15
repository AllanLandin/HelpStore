import { useSearchParams } from "react-router-dom";
import CardProduct from "../../components/CardProduct";
import { useContext } from "react";
import fetchProducts from "../../api/fetchProducts";
import Header from "../../components/Header";
import { appContext } from "../../contexts/appContext";

function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const { productsSearched } = useContext(appContext);

  return (
    <div>
      <Header />
      <div className="">
        <p className="text-3xl text-center p-5">
          Resultados para{" "}
          <span className="text-red-500 underline ">{query}</span>
        </p>
        <div className="grid sm:grid-cols-3 md:grid-cols-4 gap-3">
          {productsSearched.map((product, index) => (
            <CardProduct key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
