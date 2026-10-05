import { useState } from "react";
import { Link } from "react-router-dom";

function Cart({ cart, setCart }) {
  const [stockMessage, setStockMessage] = useState("");

  function updateQuantity(id, amount) {
    const updatedCart = cart
      .map(function (item) {
        if (item.id === id) {
          const newQuantity = item.quantity + amount;

          if (newQuantity > item.stock) {
            setStockMessage("Maximum stock reached.");
            return item;
          }

          setStockMessage("");

          return {
            ...item,
            quantity: newQuantity,
          };
        }

        return item;
      })
      .filter(function (item) {
        return item.quantity > 0;
      });

    setCart(updatedCart);
  }

  function removeItem(id) {
    const updatedCart = cart.filter(function (item) {
      return item.id !== id;
    });

    setCart(updatedCart);
  }

  const total = cart.reduce(function (sum, item) {
    return sum + item.price * item.quantity;
  }, 0);

  return (
    <section className="cart-page">
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map(function (product) {
              return (
                <div className="cart-item" key={product.id}>
                  <img src={product.image} alt={product.name} />

                  <div>
                    <h2>{product.name}</h2>

                    {stockMessage && <p>{stockMessage}</p>}

                    <div className="quantity-controls">
                      <button onClick={() => updateQuantity(product.id, -1)}>
                        -
                      </button>

                      <span>{product.quantity}</span>

                      <button onClick={() => updateQuantity(product.id, 1)}>
                        +
                      </button>
                    </div>
                    <p>₦{product.price.toLocaleString()}</p>

                    <button onClick={() => removeItem(product.id)}>
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="cart-summary">
            <h2>Order Summary</h2>

            <p>Total: ₦{total.toLocaleString()}</p>

            <Link to="/checkout" className="checkout-button">
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </section>
  );
}

export default Cart;
