import App from './Components/App';
import ErrorPage from './Components/ErrorPage';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route index element={<Homepage />} />
    </Route>,
  ),
);

export default router;
