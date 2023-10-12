import { useState } from 'react';
import Router from './Router';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingProductIndex = cartItems.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingProductIndex].quantity =
        Number(updatedCartItems[existingProductIndex].quantity) +
        Number(product.quantity);
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, product]);
    }
  };

  const removeFromCart = (product) => {
    setCartItems(cartItems.filter((item) => item != product));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <Router
      cartItems={cartItems}
      addToCart={addToCart}
      removeFromCart={removeFromCart}
      clearCart={clearCart}
    />
  );
}

export default App;
