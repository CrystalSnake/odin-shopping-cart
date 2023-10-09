import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from './Home';
import Catalog from './catalog';
import Cart from './cart';
import ErrorPage from './ErrorPage';

const Router = ({ cartItems, addToCart, removeFromCart }) => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/catalog',
      element: <Catalog addToCart={addToCart} />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/cart',
      element: <Cart cartItems={cartItems} removeFromCart={removeFromCart} />,
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

Router.propTypes = {
  cartItems: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default Router;
