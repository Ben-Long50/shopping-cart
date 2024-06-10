import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiCart, mdiAnvil } from '@mdi/js';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.navContainer}>
        <Icon className={styles.icon} path={mdiAnvil} size={'3.5rem'} />
        <h2 className={styles.title}>Brokkr&apos;s Anvil</h2>
      </div>
      <div className={styles.navContainer}>
        <Link className={styles.navLink} to="home">
          Home
        </Link>
        <Link className={styles.navLink} to="store">
          Store
        </Link>
        <Link to="cart">
          <Icon className={styles.navLink} path={mdiCart} size={'2.5rem'} />
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
