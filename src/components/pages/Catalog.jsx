import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Product from './Product';
import Header from './modules/Header';
import Footer from './modules/Footer';
import fetchData from '../other/Fetch';

function Catalog({ addToCart }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchData()
      .then((json) => setProducts(json))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <Header />
      <h2>List of products</h2>
      {products.map((product) => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}
      <Footer />
    </>
  );
}

Catalog.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default Catalog;