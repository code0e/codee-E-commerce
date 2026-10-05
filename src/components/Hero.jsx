function Hero() {
  function handleShopNow() {
    const productsSection = document.querySelector(".products");

    productsSection.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-category">
          FASHION · STYLE · EVERYDAY ESSENTIALS
        </span>

        <h1>Style that fits your everyday life.</h1>

        <p>
          Discover sneakers, watches and clothing designed to keep your everyday
          look simple, comfortable and fresh.
        </p>

        <button onClick={handleShopNow}>Shop Now</button>
      </div>

      <div className="hero-image">
        <img src="/hero.jpg" alt="CODEE collection" />
      </div>
    </section>
  );
}

export default Hero;
