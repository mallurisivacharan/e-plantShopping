import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../redux/CartSlice";

export default function CartItem() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const calculateTotal = () =>
    items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>

      {items.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>

          {/* quantity control */}
          <button onClick={() => dispatch(addItem(item))}>+</button>
          <span> {item.quantity} </span>
          <button onClick={() => dispatch(removeItem(item.id))}>-</button>

          {/* required: per item total */}
          <p>Total: ${item.price * item.quantity}</p>
        </div>
      ))}

      <h3>Total Cart Amount: ${calculateTotal()}</h3>
    </div>
  );
}