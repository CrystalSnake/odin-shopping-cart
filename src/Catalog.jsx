import { useState } from 'react';
import Product from './Product';
import Header from './header';
import Footer from './footer';

function Catalog() {
  return (
    <>
      <Header />
      <h2>List of products</h2>
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Footer />
    </>
  );
}

export default Catalog;
