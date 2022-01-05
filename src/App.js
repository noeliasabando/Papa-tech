import { Routes, Route } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Checkout from "./pages/Checkout/Checkout";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="detail" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
