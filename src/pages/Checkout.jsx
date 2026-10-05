import { useState } from "react";
import { Link } from "react-router-dom";

function Checkout({ cart, setCart }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  const total = cart.reduce(function (sum, item) {
    return sum + item.price * item.quantity;
  }, 0);

  function handleSubmit(event) {
    event.preventDefault();

    setCart([]);
    setOrderPlaced(true);
  }

  if (cart.length === 0 && !orderPlaced) {
    return (
      <section className="empty-checkout">
        <h1>Your cart is empty</h1>

        <p>Add some products to your cart before checking out.</p>

        <Link to="/">Continue Shopping</Link>
      </section>
    );
  }

  if (orderPlaced) {
    return (
      <section className="order-confirmation">
        <h1>Order Confirmed!</h1>

        <p>Thank you, {formData.name}.</p>

        <p>Your order has been placed successfully.</p>

        <Link to="/">Continue Shopping</Link>
      </section>
    );
  }

  return (
    <section className="checkout">
      <h1>Checkout</h1>

      <div className="checkout-container">
        <form onSubmit={handleSubmit}>
          <h2>Customer Information</h2>

          <input
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={(event) =>
              setFormData({
                ...formData,
                name: event.target.value,
              })
            }
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(event) =>
              setFormData({
                ...formData,
                email: event.target.value,
              })
            }
            required
          />

          <input
            type="text"
            placeholder="Delivery Address"
            value={formData.address}
            onChange={(event) =>
              setFormData({
                ...formData,
                address: event.target.value,
              })
            }
            required
          />

          <button type="submit">Place Order</button>
        </form>

        <div className="checkout-summary">
          <h2>Order Summary</h2>

          {cart.map(function (item) {
            return (
              <div className="checkout-item" key={item.id}>
                <p>
                  {item.name} × {item.quantity}
                </p>

                <p>₦{(item.price * item.quantity).toLocaleString()}</p>
              </div>
            );
          })}

          <h2>Total: ₦{total.toLocaleString()}</h2>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
