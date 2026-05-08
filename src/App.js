import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>🏠 Home Page</h2>
      <p>Welcome to Paradise Nursery</p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      {/* NAVBAR */}
      <div style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/plants">Plants</Link> |{" "}
        <Link to="/cart">Cart</Link>
      </div>

      {/* PAGES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </Router>
  );
}