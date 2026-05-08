import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

export default function ProductList() {
  const dispatch = useDispatch();

  const plants = [
    { id: 1, name: "Rose", price: 10 },
    { id: 2, name: "Tulip", price: 12 },
    { id: 3, name: "Cactus", price: 15 }
  ];

  const handleAdd = (plant) => {
    dispatch(addItem(plant));
    alert("Added to cart ✔");
  };

  return (
    <div>
      <h2>Plants Page</h2>

      {plants.map((p) => (
        <div key={p.id}>
          <h3>{p.name}</h3>
          <p>{p.price}</p>

          <button onClick={() => handleAdd(p)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}