import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";
import { useState } from "react";

export default function ProductList() {
  const dispatch = useDispatch();
  const [addedItems, setAddedItems] = useState([]);

  const plants = {
    Flowers: [
      { id: 1, name: "Rose", price: 10 },
      { id: 2, name: "Tulip", price: 12 }
    ],
    Desert: [
      { id: 3, name: "Cactus", price: 15 }
    ],
    Indoor: [
      { id: 4, name: "Aloe Vera", price: 20 },
      { id: 5, name: "Snake Plant", price: 18 }
    ]
  };

  const handleAdd = (plant) => {
    dispatch(addItem(plant));
    setAddedItems([...addedItems, plant.id]);
  };

  return (
    <div>
      <h2>Plants</h2>

      {Object.keys(plants).map((category) => (
        <div key={category}>
          <h3>{category}</h3>

          {plants[category].map((p) => (
            <div key={p.id}>
              <h4>{p.name}</h4>
              <p>${p.price}</p>

              <button
                disabled={addedItems.includes(p.id)}
                onClick={() => handleAdd(p)}
              >
                {addedItems.includes(p.id) ? "Added" : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}