// Product.jsx
import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { CartContext } from "../../Contexts/CartContext.jsx"; // Add import for CartContext
import styles from "./Product.module.css";
import stars from '../../../public/Group 88.png';
import Quantity from "../Quantity/Quantity.jsx";
import tweeter from '../../../public/tweet(1).png'
import linkedin from '../../../public/linkedin.png'
import facebook from '../../../public/facebook.png'

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext); // Access addToCart function
  const [selectedQuantity, setSelectedQuantity] = useState(1); // State for quantity

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product details:", error));
  }, [id]);

  if (!product) {
    return <p>Loading product details...</p>;
  }

  const handleAddToCart = () => {
    addToCart({
      productimg: product.image,
      productename: product.title,
      productedescription: product.description,
      producteprice: `$${product.price.toFixed(2)}`,
      id: product.id,
      quantity: selectedQuantity, // Pass the selected quantity
    });
  };

  return (
    <>
      <main>
        <div className={styles.linkbar}>
          <Link to="/">Home   {" > "}</Link>
          <Link to="/shop">Shop   {" > "}</Link>
          <span>{product.title}</span> 
        </div>
        <div className={styles.main}>
          <img
            className={styles.productimg}
            src={product.image}
            alt={product.title}
          />
          <div className={styles.productDetail}>
            <h2>{product.title}</h2>
            <h3>${product.price.toFixed(2)}</h3>
            <div className={styles.rate}>
              <img src={stars} alt="Rating stars" />
              <p>{product.rating.rate}5 Customer Review</p> {/* Assuming `rate` is inside `rating` */}
            </div>
            <p>{product.description}</p>
            <div className={styles.btnsdiv}>
            <Quantity
              itemId={product.id}
              currentQuantity={selectedQuantity}
              onQuantityChange={setSelectedQuantity} // Callback to update quantity
            />
            <button className={styles.addbtn} onClick={handleAddToCart}>Add to Cart</button>
          
            </div>
            <hr />
            <table>
              <tr>
              <th>sku</th>
              <th>:</th>
              <th>5678</th>
              </tr>
              <tr>
                <th>Category</th>
                <th>:</th>
                <th>{product.category}</th>
              </tr>
              <tr>
              <th>share</th>
              <th>:</th>
              <th className={styles.share}>
              <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
        <img src={tweeter} alt="Twitter" />
      </a>
      <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
        <img src={linkedin} alt="LinkedIn" />
      </a>
      <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
        <img src={facebook} alt="Facebook" />
      </a>
              </th>
              </tr>
            </table>
            
           

            </div>
           
        </div>
        <hr />
      </main>
      <div className={styles.divdescription}>
        <h4>Description</h4>
        <p>{product.description}</p>
      </div>
    </>
  );
}

export default Product;
