import "./styles/App.css";
import ProductsDisplay from "./components/ProductsDisplay";
import Header from "./components/Header";
import Main from "./components/Main";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="px-5">
      <Cart />
      <Header />
      <Main />
      <ProductsDisplay />
    </div>
  );
}

export default App;
