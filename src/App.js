import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FaShoppingCart, FaHome } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
import Home from './components/Home';
import WinerySearch from './components/WinerySearch';
import VarietalSearch from './components/VarietalSearch';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import products from './products.json';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.name === product.name);
    if (existingItem) {
      setCartItems(cartItems.map(item => item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    setCartItems(cartItems.filter(item => item.name !== product.name));
  };

  const updateCartItemQuantity = (product, quantity) => {
    if (quantity <= 0) {
      removeFromCart(product);
    } else {
      setCartItems(cartItems.map(item => item.name === product.name ? { ...item, quantity } : item));
    }
  };

  return (
    <Router>
      <div>
        <Helmet>
          <title>Penitentes Wines - Los mejores vinos de Mendoza</title>
          <meta name="description" content="Penitentes Wines - Los mejores vinos desde Mendoza. Descubre nuestra selección de vinos de las mejores bodegas." />
        </Helmet>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
          <div className="container-fluid d-flex justify-content-between align-items-center">
            <Link className="nav-link order-1" to="/"><FaHome /> Inicio</Link>
            <Link className="navbar-brand order-2 mx-auto" to="/">Penitentes Wines</Link>
            <Link className="nav-link order-3 ms-auto" to="/cart"><FaShoppingCart /> ({cartItems.length})</Link>
          </div>
        </nav>
        <div className="container home-container py-3 px-3">
          <Routes>
            <Route path="/winery-search" element={<WinerySearch addToCart={addToCart} />} />
            <Route path="/varietal-search" element={<VarietalSearch addToCart={addToCart} />} />
            <Route path="/products" element={<ProductList addToCart={addToCart} products={products} />} />
            <Route path="/cart" element={<Cart cartItems={cartItems} updateCartItemQuantity={updateCartItemQuantity} removeFromCart={removeFromCart} />} />
            <Route path="/" element={<Home addToCart={addToCart} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
