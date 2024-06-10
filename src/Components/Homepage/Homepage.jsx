import { Link } from 'react-router-dom';
import styles from './Homepage.module.css';

const Homepage = () => {
  return (
    <>
      <header className={styles.headerImg}>
        <p>Welcome to,</p>
        <h1 className={styles.title}>Brokkr&apos;s Anvil</h1>
        <p>Only the best in dwarven-made jewelry</p>
        <button>
          <Link to="/store">Shop</Link>
        </button>
      </header>
    </>
  );
};

export default Homepage;
