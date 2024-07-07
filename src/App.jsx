import "./styles/App.css";
import ProductsDisplay from "./components/ProductsDisplay";
import Header from "./components/Header";
import Intro from "./components/Intro";

function App() {
  return (
    <div className="px-5">
      <Header />
      <Intro />
      <ProductsDisplay />
    </div>
  );
}

export default App;
