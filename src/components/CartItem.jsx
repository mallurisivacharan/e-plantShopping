import { useSelector } from "react-redux";

export default function CartItem() {
  const items = useSelector((state) => state.cart.items);

  const calculateTotal = () => {
    return items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  };

  return (
    <div>
      <h2>Shopping Cart</h2>

      {items.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        items.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <p>Qty: {item.quantity}</p>
          </div>
        ))
      )}

      <h3>Total Cart Amount: ${calculateTotal()}</h3>
    </div>
  );
}