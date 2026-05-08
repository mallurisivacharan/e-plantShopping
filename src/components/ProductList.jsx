import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

export default function ProductList() {
  const dispatch = useDispatch();

  const plants = [
    { id: 1, name: "Rose", price: 10, category: "Flower" },
    { id: 2, name: "Tulip", price: 12, category: "Flower" },
    { id: 3, name: "Cactus", price: 15, category: "Desert" },
    { id: 4, name: "Aloe Vera", price: 20, category: "Medicinal" },
    { id: 5, name: "Bonsai", price: 25, category: "Decorative" },
    { id: 6, name: "Snake Plant", price: 18, category: "Indoor" }
  ];

  return (
    <div>
      <h2>Plants</h2>

      {plants.map((p) => (
        <div key={p.id}>
          <img
            src="https://via.placeholder.com/100"
            alt={p.name}
          />

          <h3>{p.name}</h3>
          <p>Category: {p.category}</p>
          <p>Price: ${p.price}</p>

          <button onClick={() => dispatch(addItem(p))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}