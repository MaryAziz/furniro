// src/Components/CartDropdown/CartDropdown.jsx
import React, { useContext, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Contexts/CartContext.jsx';
import styles from './CartDropdown.module.css';
import delet from '../../../public/delet.png';

function CartDropdown({ toggleDropdown }) {
  const { cart, removeFromCart } = useContext(CartContext);
  const dropdownRef = useRef(null);

  // Handle clicks outside the dropdown to close it
  function handleClickOutside(event) {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      toggleDropdown(false);
    }
  }

  // Attach event listener for clicks outside the dropdown
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Calculate subtotal
  const subtotal = cart.reduce((total, item) => total + item.quantity * parseFloat(item.producteprice.slice(1)), 0);

  return (
    <div className={styles.cartDropdown} ref={dropdownRef}>
      <h3>Shopping Cart</h3>
      <hr />
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className={styles.cartList}>
            {cart.map((item, index) => {
              // Calculate total price for each item
              const itemTotal = item.quantity * parseFloat(item.producteprice.slice(1));

              return (
                <li key={index} className={styles.cartItem}>
                  <img src={item.productimg} alt={item.productename} width={50} />
                  <div className={styles.cartItemDetails}>
                    <span>{item.productename}</span>
                    <div className={styles.deletprice}>
                    <p> ${parseFloat(item.producteprice.slice(1)).toFixed(2)} x {item.quantity}</p>
                    <img src={delet} alt="Delete" onClick={() => removeFromCart(item.id)} className={styles.deleteIcon} />
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className={styles.subtotal}>
            <strong><p style={{ color: 'black' }}>subtotal</p>${subtotal.toFixed(2)}</strong> {/* Display subtotal */}
          </div>
          <hr />

          <Link to="/cart" className={styles.viewCartButton} onClick={() => toggleDropdown(false)}>
            Cart
          </Link>
        </>
      )}
    </div>
  );
}

export default CartDropdown;
