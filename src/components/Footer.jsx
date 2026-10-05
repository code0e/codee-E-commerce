import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>CODEE</h2>
          <p>Quality products. Simple shopping.</p>
        </div>

        <div className="footer-shop">
          <h3>Shop</h3>

          <Link to="/">Sneakers</Link>
          <Link to="/">Timberland Shoes</Link>
          <Link to="/">Wristwatches</Link>
          <Link to="/">Plain T-Shirts</Link>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <Link to="/">Products</Link>
          <Link to="/">Categories</Link>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>

          <p>Email: support@codee.com</p>
          <p>Phone: +234 800 000 0000</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 CODEE. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
