import "./styles/App.css";
import ProductsDisplay from "./components/ProductsDisplay";
import Header from "./components/Header";

function App() {
  return (
    <div className="px-5">
      <Header />
      <ProductsDisplay />
    </div>
  );
}

export default App;
