import React, { useState } from 'react';
import styles from './Footer.module.css';
import { Link } from "react-router-dom";

function Footer() {
  const [email, setEmail] = useState(''); 

  const handleEmailChange = (e) => {
    setEmail(e.target.value); 
  };

  const handleSubscribe = () => {
    console.log("Subscribed with email:", email); 
    setEmail('');
  };

  return (
    <>
      <div className={styles.Footer}>
        <div className={styles.left}>
          <h2>Funiro.</h2>
          <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
        </div>
        <table>
          <thead>
            <tr>
              <th>Links</th>
              <th>Help</th>
              <th>Newsletter</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Link to="/">Home</Link></td>
              <td>Payment Options</td>
              <td>
                <input 
                className={styles.email}
                  type="email" 
                  value={email} 
                  onChange={handleEmailChange} 
                  placeholder='Enter Your Email Address'
                />
              </td>
              <td>
                <button onClick={handleSubscribe}>SUBSCRIBE</button>
              </td>
            </tr>
            <tr>
              <td><Link to="/Shop">Shop</Link></td>
              <td>Returns</td>
            </tr>
            <tr>
              <td>About</td>
              <td>Privacy Policies</td>
            </tr>
            <tr>
              <td><Link to="/Contact">Contact</Link></td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr />
      <footer>2023 Funiro. All rights reserved</footer>
    </>
  );
}

export default Footer;
