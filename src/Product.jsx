import PropTypes from 'prop-types';
import styles from './Product.module.css';

function Product({ product }) {
  const { title, image, description, price } = product;

  return (
    <>
      <div>
        <h2>{title}</h2>
        <img className={styles.image} src={image} alt="product photo" />
        <p>{description}</p>
        <p>Price: {price}</p>
      </div>
    </>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Product;
