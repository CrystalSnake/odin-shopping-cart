import PropTypes from 'prop-types';
import Header from './modules/Header';
import Footer from './modules/Footer';

function Home({ cartItems }) {
  return (
    <>
      <Header cartItems={cartItems} />
      <div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et enim
          alias a odio ratione suscipit molestiae veniam sequi ex, vero
          laudantium, sunt eaque dicta voluptate nostrum qui accusantium amet
          commodi.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
          tempora dolor ex excepturi voluptas totam suscipit facilis nobis
          impedit quia.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo nesciunt
          sit facilis, amet nobis tempore praesentium aspernatur minima fuga.
          Quo, debitis animi eum quia, harum beatae distinctio at laborum quae,
          officiis adipisci cumque nemo! Et libero dolorum ex neque ducimus!
        </p>
      </div>
      <Footer />
    </>
  );
}

Home.propTypes = {
  cartItems: PropTypes.array.isRequired,
};

export default Home;
