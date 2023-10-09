import { useState } from 'react';
import Router from './Router';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (product) => {
    setCartItems(cartItems.filter((item) => item != product));
  };

  return (
    <Router
      cartItems={cartItems}
      addToCart={addToCart}
      removeFromCart={removeFromCart}
    />
  );
}

export default App;
