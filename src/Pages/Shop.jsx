// src/Components/Shop/Shop.jsx
import React, { useEffect, useState, useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import { CartContext } from "../Contexts/CartContext";
import styles from "../Components/Shop/Shop.module.css";
import Features from "../Components/features/Features";
import logo from "../../public/Meubel House_Logos-05.png";

function Shop() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const [overlayMessage, setOverlayMessage] = useState("");
  const location = useLocation();
  const { addToCart } = useContext(CartContext); // Access addToCart from context

  const searchParams = new URLSearchParams(location.search);
  const selectedCategory = searchParams.get("category") || "all";

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const updatedProducts = data.map((product) => ({
          productimg: product.image,
          productename: product.title,
          productedescription: product.description,
          producteprice: `$${product.price.toFixed(2)}`,
          category: product.category,
          id: product.id,
          productrate: product.rate,
        }));
        setProducts(updatedProducts);

        if (selectedCategory === "all") {
          setFilteredProducts(updatedProducts);
        } else {
          const filtered = updatedProducts.filter(
            (product) => product.category === selectedCategory
          );
          setFilteredProducts(filtered);
        }
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, [selectedCategory]);

  const handleAddToCart = (productId) => {
    const product = products.find((p) => p.id === productId);
    if (product) {
      addToCart({
        id: product.id,
        productimg: product.productimg,
        productename: product.productename,
        productedescription: product.productedescription,
        producteprice: product.producteprice,
        quantity: 1,
      });
    }
  };

  return (
    <>
      <div className={styles.shop}>
        {}
        <div className={styles.banner}>
          <img src={logo} alt="" />
          <h1>Shop</h1>
          <div className={styles.Links}>
            <Link to="/">Home{" > "}</Link>
            <Link to="/Shop">Shop</Link>
          </div>
        </div>
        {}
        <div className={styles.main} id={styles.main}>
          {filteredProducts.map((product) => (
            <div key={product.id} className={styles.product}>
              <Link
                to={`/products/${product.id}`}
                className={styles.productLink}
              >
                <img
                  className={styles.productimg}
                  src={product.productimg}
                  alt={product.productename}
                />
                <h4 className={styles.productename}>{product.productename}</h4>
              </Link>
              <p className={styles.productedescription}>
                {product.productedescription}
              </p>
              <div className={styles.price}>
                <h4 className={styles.producteprice}>
                  {product.producteprice}
                </h4>
              </div>
              <div className={styles.buttonWrapper}>
                <button
                  onClick={() => handleAddToCart(product.id)}
                  className={styles.addToCartButton}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Features></Features>
    </>
  );
}

export default Shop;
