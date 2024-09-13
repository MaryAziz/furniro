import React, { useContext } from "react";
import { CartContext } from "../Contexts/CartContext.jsx";
import { Link } from "react-router-dom";
import styles from "../Components/Cart/Cart.module.css";
import Quantity from "../Components/Quantity/Quantity.jsx";
import logo from "../../public/Meubel House_Logos-05.png";
import Features from "../Components/features/Features.jsx";
import can from "../../public/can.png";

function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useContext(CartContext); // Access clearCart from context

  const totalPrice = cart.reduce(
    (total, product) =>
      total + parseFloat(product.producteprice.slice(1)) * product.quantity,
    0
  );

  const handleCheckout = () => {
    // Perform checkout logic, e.g., redirecting or showing a success message
    // Clear the cart after checkout
    clearCart();
    alert('Checkout completed! Your cart has been cleared.');
  };

  return (
    <>
      <div className={styles.cartPage}>
        <div className={styles.banner}>
          <img src={logo} alt="Logo" />
          <h1>Cart</h1>
          <div>
            <Link to="/">Home{" > "}</Link>
            <Link to="/Cart">Cart</Link>
          </div>
        </div>
        <div className={styles.main}>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              <table className={styles.cartList}>
                <thead>
                  <tr>
                    <th></th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((product) => (
                    <tr key={product.id}>
                      <td>
                        <img
                          className={styles.productimg}
                          src={product.productimg}
                          alt={product.productename}
                        />
                      </td>
                      <td className={styles.productename}>{product.productename}</td>
                      <td>{product.producteprice}</td>
                      <td>
                        <Quantity
                          itemId={product.id}
                          currentQuantity={product.quantity}
                          onQuantityChange={(newQuantity) =>
                            updateQuantity(product.id, newQuantity)
                          }
                        />
                      </td>
                      <td>
                        {(
                          parseFloat(product.producteprice.slice(1)) *
                          product.quantity
                        ).toFixed(2)}
                      </td>
                      <td>
                        <img
                          src={can}
                          alt="Remove"
                          onClick={() => removeFromCart(product.id)}
                          style={{ cursor: "pointer" }}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className={styles.cartTotals}>
                <h2>Cart Totals</h2>
                <div className={styles.totalPrice}>
                  <label className={styles.price}>Subtotal:</label>
                  <label className={styles.price}>
                    ${totalPrice.toFixed(2)}
                  </label>
                  <h3 className={styles.price}>Total Price</h3>
                  <h3 className={styles.price} style={{ color: "gold" }}>
                    ${totalPrice.toFixed(2)}
                  </h3>
                </div>
                <button
                  className={styles.confirmButton}
                  onClick={handleCheckout}
                >
                  Check Out
                </button>
              </div>
            </>
          )}
        </div>
        <Features />
      </div>
    </>
  );
}

export default Cart;
