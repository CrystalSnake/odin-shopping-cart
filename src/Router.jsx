import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Catalog from './catalog';
import Cart from './cart';
import ErrorPage from './ErrorPage';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
    },
    {
      path: '/catalog',
      element: <Catalog />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/cart',
      element: <Cart />,
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
