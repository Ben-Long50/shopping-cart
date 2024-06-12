import App from './Components/App';
import ErrorPage from './Components/ErrorPage';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';
import Store from './Components/Store/Store';
import Checkout from './Components/Checkout/Checkout';
import Cart from './Components/Cart/Cart';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route index element={<Homepage />} />
      <Route path="store" element={<Store />} />
      <Route path="checkout" element={<Checkout />} />
    </Route>,
  ),
);

export default router;
