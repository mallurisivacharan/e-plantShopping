import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h1>Welcome to Paradise Nursery</h1>

      <Link to="/plants">
        <button>Get Started</button>
      </Link>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </Router>
  );
}