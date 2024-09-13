import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import Contact from './Pages/Contact';
import Layout from './Pages/Layout';
import Product from './Components/Producte/Product.jsx'
import './App.css';

function NoPage() {
  return <h1>404 - Page Not Found</h1>;
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Shop" element={<Shop />} />
            <Route path="products/:id" element={<Product />} /> 
            <Route path="contact" element={<Contact />} />
            <Route path="Cart" element={<Cart />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
