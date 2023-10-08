import PropTypes from 'prop-types';
import Modal from './Modal';
import Header from './header';
import Footer from './footer';

function Cart(props) {
  const items = props.cartItems;
  return (
    <>
      <Header />
      <div>
        {items.length === 0 ? (
          <p>Your shopping cart is empty.</p>
        ) : (
          <ul>
            {items.map((item) => (
              <li key={item.product.id}>{item.product.title}</li>
            ))}
          </ul>
        )}
      </div>

      <Modal />
      <Footer />
    </>
  );
}

Cart.propTypes = {
  cartItems: PropTypes.array.isRequired,
};

export default Cart;
