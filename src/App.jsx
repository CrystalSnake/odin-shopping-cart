import { useState } from 'react';
import Router from './Router';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return <Router cartItems={cartItems} addToCart={addToCart} />;
}

export default App;
