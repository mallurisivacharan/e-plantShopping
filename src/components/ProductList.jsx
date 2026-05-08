import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

export default function ProductList() {
  const dispatch = useDispatch();

  const plantsArray = [
    { id: 1, name: "Rose", price: 10, category: "Flowers", img: "https://via.placeholder.com/100" },
    { id: 2, name: "Tulip", price: 12, category: "Flowers", img: "https://via.placeholder.com/100" },
    { id: 3, name: "Sunflower", price: 14, category: "Flowers", img: "https://via.placeholder.com/100" },

    { id: 4, name: "Cactus", price: 15, category: "Desert", img: "https://via.placeholder.com/100" },
    { id: 5, name: "Aloe Vera", price: 18, category: "Medicinal", img: "https://via.placeholder.com/100" },
    { id: 6, name: "Bonsai", price: 25, category: "Indoor", img: "https://via.placeholder.com/100" }
  ];

  const categories = ["Flowers", "Desert", "Medicinal", "Indoor"];

  return (
    <div>

      {/* NAVBAR (required) */}
      <nav>
        <a href="/">Home</a> |{" "}
        <a href="/plants">Plants</a> |{" "}
        <a href="/cart">Cart</a>
      </nav>

      <h2>Plants List</h2>

      {categories.map((cat) => (
        <div key={cat}>
          <h3>{cat}</h3>

          {plantsArray
            .filter((p) => p.category === cat)
            .map((plant) => (
              <div key={plant.id}>
                <img src={plant.img} alt={plant.name} width="80" />

                <h4>{plant.name}</h4>
                <p>${plant.price}</p>

                <button onClick={() => dispatch(addItem(plant))}>
                  Add to Cart
                </button>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}