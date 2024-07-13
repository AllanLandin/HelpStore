import "./styles/App.css";
import ProductsDisplay from "./components/ProductsDisplay";
import Header from "./components/Header";
import Main from "./components/Main";
import Cart from "./components/Cart";
import BuyConfirmed from "./components/BuyConfirmed";

function App() {
  return (
    <div className="px-5">
      <BuyConfirmed />
      <Cart />
      <Header />
      <Main />
      <ProductsDisplay />
    </div>
  );
}

export default App;
