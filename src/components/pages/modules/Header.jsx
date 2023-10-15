import PropTypes from 'prop-types';
import Navigation from './navigation';

function Header({ cartItems }) {
  return (
    <>
      <h1>The best shop!</h1>
      <Navigation cartItems={cartItems} />
    </>
  );
}

Header.propTypes = {
  cartItems: PropTypes.array.isRequired,
};

export default Header;
