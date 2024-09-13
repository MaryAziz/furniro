// src/main.jsx or src/index.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App.jsx';
import { CartProvider } from '../src/Contexts/CartContext.jsx'; // Correct import path for CartProvider
import './index.css';

// Wrap the application with CartProvider
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider> {/* Ensure App is wrapped with CartProvider */}
      <App />
    </CartProvider>
  </StrictMode>
);
