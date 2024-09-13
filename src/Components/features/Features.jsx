import React from "react";
import styles from "./Features.module.css";
import Quality from '../../../public/trophy 1.png';
import Warranty from '../../../public/guarantee.png';
import Shipping from '../../../public/shipping.png';
import Support from '../../../public/customer-support.png'

function Features() {
  return (
    <div className={styles.main}>
      <div className={styles.featuer}>
        <img className={styles.logo} src={Quality} alt="" />
        <div className={styles.data}>
          <h4>High Quality</h4>
          <p>crafted from top materials</p>
        </div>
      </div>
      <div className={styles.featuer}>
        <img className={styles.logo} src={Warranty} alt="" />
        <div className={styles.data}>
          <h4>Warranty Protection</h4>
          <p>Over 2 years</p>
        </div>
      </div>
      <div className={styles.featuer}>
        <img className={styles.logo} src={Shipping} alt="" />
        <div className={styles.data}>
          <h4>Free Shipping</h4>
          <p>Order over 150 $</p>
        </div>
      </div>
      <div className={styles.featuer}>
        <img className={styles.logo} src={Support} alt="" />
        <div className={styles.data}>
          <h4>24 / 7 Support</h4>
          <p>Dedicated support</p>
        </div>
      </div>
    </div>
  );
}

export default Features;
