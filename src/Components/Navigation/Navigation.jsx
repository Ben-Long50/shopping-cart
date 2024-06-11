import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiCart, mdiAnvil, mdiCardsDiamond } from '@mdi/js';
import styles from './Navigation.module.css';

const Navigation = () => {
  function toggleCart() {
    const cart = document.querySelector('#cart');
    cart.classList.toggle('visible');
  }

  return (
    <nav className={styles.navBar}>
      <div className={styles.navTitle}>
        <Icon className={styles.icon} path={mdiAnvil} size={'3.5rem'} />
        <h2 className={styles.title}>Brokkr&apos;s Anvil</h2>
      </div>
      <div className={styles.navContainer}>
        <Link className={styles.navLink} to="/">
          Home
        </Link>
        <Icon
          path={mdiCardsDiamond}
          size={'1.25rem'}
          style={{ transform: 'rotate(90deg)' }}
        />
        <Link className={styles.navLink} to="store">
          Store
        </Link>
        <Icon
          path={mdiCardsDiamond}
          size={'1.25rem'}
          style={{ transform: 'rotate(90deg)' }}
        />
        <Link className={styles.navLink} to="checkout">
          Checkout
        </Link>
      </div>
      <Icon
        className={styles.cart}
        path={mdiCart}
        size={'2.5rem'}
        onClick={toggleCart}
      />
    </nav>
  );
};

export default Navigation;
