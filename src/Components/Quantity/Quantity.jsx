// Quantity.jsx
import React, { useContext } from 'react';
import styles from './Quantity.module.css';
import { CartContext } from '../../Contexts/CartContext.jsx'; // Adjust the path accordingly

function Quantity({ itemId, currentQuantity, onQuantityChange }) {
    const { updateQuantity } = useContext(CartContext);

    const increment = () => {
        const newQuantity = currentQuantity + 1;
        onQuantityChange(newQuantity);
        updateQuantity(itemId, newQuantity); // Update in context as well
    };

    const decrement = () => {
        if (currentQuantity > 1) {
            const newQuantity = currentQuantity - 1;
            onQuantityChange(newQuantity);
            updateQuantity(itemId, newQuantity); // Update in context as well
        }
    };

    return (
        <div className={styles.counter}>
            <button onClick={decrement} className={styles.symbol}>-</button>
            <label className={styles.number}>{currentQuantity}</label>
            <button onClick={increment} className={styles.symbol}>+</button>
        </div>
    );
}

export default Quantity;
