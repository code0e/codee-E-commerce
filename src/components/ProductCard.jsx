import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="product-link">
      <div className="product-card">
        <img src={product.image} alt={product.name} />

        <h3>{product.name}</h3>
        <p>₦{product.price.toLocaleString()}</p>
        <p>{product.category}</p>
      </div>
    </Link>
  );
}

export default ProductCard;
