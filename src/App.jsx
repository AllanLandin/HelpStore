import "./styles/App.css";
import HomePage from "./pages/Home";
import PurchasePage from "./pages/PurchasePage";
import SearchPage from "./pages/SearchPage";
import AppRoutes from "./routes";

function App() {
  return (
    <div className="px-5">
      <AppRoutes />
    </div>
  );
}

export default App;
