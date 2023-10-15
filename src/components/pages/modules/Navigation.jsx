import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { sumOfProducts } from '../../other/Utilities';

function Navigation({ cartItems }) {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/catalog">Catalog</Link>
        </li>
        <li>
          <Link to="/cart">
            Cart
            {cartItems.length != 0 ? '(' + sumOfProducts(cartItems) + ')' : ''}
          </Link>
        </li>
      </ul>
    </>
  );
}

Navigation.propTypes = {
  cartItems: PropTypes.array.isRequired,
};

export default Navigation;
