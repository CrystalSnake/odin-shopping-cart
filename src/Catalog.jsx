import { useState, useEffect } from 'react';
import Product from './Product';
import Header from './header';
import Footer from './footer';
import fetchData from './Fetch';

function Catalog() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchData().then((json) => setProducts(json));
  }, []);

  return (
    <>
      <Header />
      <h2>List of products</h2>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
      <Footer />
    </>
  );
}

export default Catalog;
