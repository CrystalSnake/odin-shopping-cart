import { useState } from 'react';
import Modal from './Modal';
import Header from './header';
import Footer from './footer';

function Cart() {
  return (
    <>
      <Header />
      <div>
        <p>Your shopping cart is empty.</p>
      </div>

      <Modal />
      <Footer />
    </>
  );
}

export default Cart;
