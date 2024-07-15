import { useSearchParams } from "react-router-dom";
import CardProduct from "../../components/CardProduct";
import { useEffect, useState } from "react";
import fetchProducts from "../../api/fetchProducts";
import Header from "../../components/Header";

function SearchPage() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  useEffect(() => {
    fetchProducts(query).then((data) => {
      setProducts(data.results);
      setLoading(false);
    });
  }, []);

  return (
    !loading && (
      <div>
        <Header />

        <div className="">
          <p className="text-3xl text-center p-5">
            Resultados para{" "}
            <span className="text-red-500 underline ">{query}</span>
          </p>
          <div className="grid sm:grid-cols-3 md:grid-cols-4 gap-3">
            {products.map((product) => (
              <CardProduct product={product} />
            ))}
          </div>
        </div>
      </div>
    )
  );
}

export default SearchPage;
