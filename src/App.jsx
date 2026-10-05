import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import products from "./data/products";
import ProductCard from "./components/ProductCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [cart, setCart] = useState([]);

  const filteredProducts = products.filter(function (product) {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory = category === "all" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar search={search} setSearch={setSearch} cart={cart} />

              <Hero />

              <section className="products" id="products">
                <div className="categories" id="categories">
                  <button onClick={() => setCategory("all")}>All</button>
                  <button onClick={() => setCategory("shoes")}>Shoes</button>
                  <button onClick={() => setCategory("watch")}>Watches</button>
                  <button onClick={() => setCategory("cloth")}>Clothes</button>
                </div>

                <div className="product-grid">
                  {filteredProducts.map(function (product) {
                    return <ProductCard key={product.id} product={product} />;
                  })}
                </div>
              </section>
            </>
          }
        />

        <Route
          path="/product/:id"
          element={<ProductDetails cart={cart} setCart={setCart} />}
        />

        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />

        <Route
          path="/checkout"
          element={<Checkout cart={cart} setCart={setCart} />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
