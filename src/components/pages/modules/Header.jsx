import PropTypes from 'prop-types';
import Navigation from './navigation';
import styles from './Header.module.css';

function Header({ cartItems }) {
  return (
    <header className={styles.header}>
      <div className="logo">
        <a href="#">GG</a>
      </div>
      <Navigation cartItems={cartItems} />
    </header>
  );
}

Header.propTypes = {
  cartItems: PropTypes.array.isRequired,
};

export default Header;
