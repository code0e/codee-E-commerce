import { useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetails({ cart, setCart }) {
  const { id } = useParams();

  const product = products.find(function (product) {
    return product.id === Number(id);
  });

  function addToCart() {
    const existingProduct = cart.find(function (item) {
      return item.id === product.id;
    });

    if (existingProduct) {
      if (existingProduct.quantity >= product.stock) {
        return;
      }

      const updatedCart = cart.map(function (item) {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }

        return item;
      });

      setCart(updatedCart);
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  }

  return (
    <section className="product-details">
      <img src={product.image} alt={product.name} />

      <div className="product-info">
        <p>{product.category}</p>

        <h1>{product.name}</h1>

        <h2>₦{product.price.toLocaleString()}</h2>

        <p>{product.description}</p>

        <button onClick={addToCart}>Add to Cart</button>
      </div>
    </section>
  );
}

export default ProductDetails;
