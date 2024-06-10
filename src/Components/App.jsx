import { Outlet } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import './styles/main.css';
import './styles/reset-css.css';

const App = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
};

export default App;
