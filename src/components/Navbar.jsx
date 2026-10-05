import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ search, setSearch, cart }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const cartCount = cart.reduce(function (sum, item) {
    return sum + item.quantity;
  }, 0);

  function closeMenu() {
    setMenuOpen(false);
  }

  function scrollToSection(section) {
    const element = document.querySelector(section);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }

    closeMenu();
  }

  return (
    <nav>
      <div className="navbar-container">
        <Link to="/" className="shop" onClick={closeMenu}>
          CODEE
        </Link>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <button onClick={() => scrollToSection(".products")}>Products</button>

          <button onClick={() => scrollToSection(".categories")}>
            Categories
          </button>

          <div className="search-box">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>

          <Link to="/cart" className="cart" onClick={closeMenu}>
            🛒 Cart ({cartCount})
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
