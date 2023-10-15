import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from './components/pages/Home';
import Catalog from './components/pages/Catalog';
import Cart from './components/pages/Cart';
import ErrorPage from './components/pages/ErrorPage';

const Router = ({ cartItems, addToCart, removeFromCart, clearCart }) => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home cartItems={cartItems} />,
    },
    {
      path: '/catalog',
      element: <Catalog addToCart={addToCart} cartItems={cartItems} />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/cart',
      element: (
        <Cart
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          clearCart={clearCart}
        />
      ),
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

Router.propTypes = {
  cartItems: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  clearCart: PropTypes.func.isRequired,
};

export default Router;
