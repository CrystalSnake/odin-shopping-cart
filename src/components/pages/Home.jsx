import PropTypes from 'prop-types';
import Header from './modules/Header';
import Footer from './modules/Footer';

function Home({ cartItems }) {
  return (
    <>
      <Header cartItems={cartItems} />
      <div>
        <h1>
          Welcome to Gadget Galaxy - your gateway to the world of cutting-edge
          gadgets and electronics!
        </h1>
        <p>
          Here you will find the latest computer components that will help you
          build the perfect system.
        </p>
        <p>
          We take pride in offering high-quality products that will enhance the
          power and performance of your computer. Whether you need any
          components, Gadget Galaxy offers the best options at competitive
          prices.
        </p>
        <p>
          Our experts are always ready to assist you in selecting and purchasing
          the perfect components for your needs.
        </p>
        <button>
          <a href="/catalog">Shop now</a>
        </button>
      </div>

      <Footer />
    </>
  );
}

Home.propTypes = {
  cartItems: PropTypes.array.isRequired,
};

export default Home;
