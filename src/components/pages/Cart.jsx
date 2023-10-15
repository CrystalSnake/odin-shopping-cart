import { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from './modules/Modal';
import Header from './modules/Header';
import Footer from './modules/Footer';
import Form from './modules/Form';
import { sumOfProducts, subtotalOfProducts } from '../other/Utilities';
import styles from './Cart.module.css';

function Cart({ cartItems, removeFromCart, clearCart }) {
  const items = cartItems;

  const [orderCheckout, setOrderCheckout] = useState(false);
  const [orderSubmit, setOrderSubmit] = useState(false);

  const submitOrder = () => {
    setOrderSubmit(true);
    clearCart();
  };

  return (
    <>
      <Header cartItems={cartItems} />
      <div>
        {items.length === 0 ? (
          <p>Your shopping cart is empty.</p>
        ) : (
          <>
            <ul>
              {items.map((item) => (
                <li key={item.id}>
                  <img
                    className={styles.image}
                    src={item.image}
                    alt={item.title}
                  />
                  {item.title}
                  Qty {item.quantity}
                  Price {item.price}
                  <button onClick={() => removeFromCart(item)}>Delete</button>
                </li>
              ))}
            </ul>
            <p>Items in cart: {sumOfProducts(items)}</p>
            <p>Subtotal: {subtotalOfProducts(items)}</p>
            <button onClick={clearCart}>Clear Cart</button>
            <button onClick={() => setOrderCheckout(true)}>Checkout</button>
          </>
        )}
      </div>

      {orderCheckout && (
        <Modal>
          {orderSubmit ? (
            <p>Your order successful</p>
          ) : (
            <Form submitOrder={submitOrder} />
          )}
        </Modal>
      )}

      <Footer />
    </>
  );
}

Cart.propTypes = {
  cartItems: PropTypes.array.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  clearCart: PropTypes.func.isRequired,
};

export default Cart;
