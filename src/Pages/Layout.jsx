// Layout.jsx
import React, { useContext, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import { CartContext } from '../../src/Contexts/CartContext.jsx';
import CartDropdown from "../Components/CartDropdown/CartDropdown.jsx"; // Import CartDropdown component
import styles from "../Components/Layout.module.css";

function Layout() {
  const { cart } = useContext(CartContext); // Access the cart state
  const [isDropdownOpen, setDropdownOpen] = useState(false); // State for cart dropdown visibility

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div id="root">
      <header className={styles.header}>
        <nav className={styles.nav}>
          <label>
            <img src="../../public/Meubel House_Logos-05.png" alt="Meubel House Logo" />
            <img src="../../public/SkinClinic.png" alt="Skin Clinic Logo" />
          </label>
          <ul className={styles.ul}>
            <div className={styles.homeshop}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
            </div>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <div className={styles.cartContainer}>
            <button className={styles.btncart} onClick={toggleDropdown}>
              <label className={styles.cartlogo} htmlFor="cartlogo"></label>
              ({cart.length}) {/* Display cart count */}
            </button>
            {isDropdownOpen && <CartDropdown toggleDropdown={toggleDropdown} />} {/* Use CartDropdown component */}
          </div>
        </nav>
      </header>
      {isDropdownOpen && (
        <div className={styles.overlay} onClick={toggleDropdown}></div>
      )}
      <main className={isDropdownOpen ? styles.dimmed : ''}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
