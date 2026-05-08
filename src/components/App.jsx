import { useState } from "react";
import ProductList from "./components/ProductList";

export default function App() {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to Paradise Nursery</h1>

      {!showProducts ? (
        <button onClick={() => setShowProducts(true)}>
          Get Started
        </button>
      ) : (
        <ProductList />
      )}
    </div>
  );
}