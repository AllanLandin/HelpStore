import ProductsDisplay from "../../components/ProductsDisplay";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Cart from "../../components/Cart";

function HomePage() {
  return (
    <div>
      <Header />
      <Main />
      <ProductsDisplay />
      <Cart />
    </div>
  );
}

export default HomePage;
