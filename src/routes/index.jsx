import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "src/pages/Home";
import SearchPage from "src/pages/SearchPage";
import BuyConfirmed from "src/components/BuyConfirmed";
import NotFoundPage from "src/pages/NotFoundPage";

function AppRoutes() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/searchProduct" element={<SearchPage />} />
          <Route path="/buyConfirm" element={<BuyConfirmed />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default AppRoutes;
