import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Product.module.css';

function Product({ product, addToCart }) {
  const { title, image, description, price } = product;
  const [productQuantity, setProductQuantity] = useState(1);

  const handleAddToCart = () => {
    const cartItem = {
      ...product,
      quantity: productQuantity,
    };
    addToCart(cartItem);
  };

  return (
    <div>
      <h2>{title}</h2>
      <img className={styles.image} src={image} alt="product photo" />
      <p>{description}</p>
      <p>Price: {price}</p>
      <label>
        Quantity:
        <input
          type="number"
          name="qty"
          value={productQuantity}
          onChange={(e) => setProductQuantity(e.target.value)}
        />
      </label>

      <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default Product;
