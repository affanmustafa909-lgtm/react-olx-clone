import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Login";
import Home from "./Home";
import ProductDetail from "./ProductDetail";
import BuyPage from "./BuyPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login */}
        <Route path="/" element={<Login />} />

        {/*  Home */}
        <Route path="/home" element={<Home />} />

        {/* Product Detail */}
        <Route path="/product/:id" element={<ProductDetail />} />

        {/* Buy Page */}
        <Route path="/buy/:id" element={<BuyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
