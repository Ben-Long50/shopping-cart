import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiCart, mdiAnvil, mdiCardsDiamond } from '@mdi/js';
import styles from './Navigation.module.css';

const Navigation = ({ cart, hideCart }) => {
  function toggleCart() {
    const cart = document.querySelector('#cart');
    const pageLayout = document.querySelector('#page-layout');
    if (!cart.classList.contains('visible')) {
      cart.style.display = 'block';
      cart.offsetHeight;
      cart.classList.toggle('visible');
    } else {
      cart.classList.toggle('visible');
      setTimeout(() => {
        cart.style.display = 'none';
      }, 500);
    }
    pageLayout.classList.toggle('tinted');
  }
  let totalItems = 0;
  cart.forEach((item) => {
    totalItems += item.quantity;
  });
  return (
    <nav className={styles.navBar}>
      <div className={styles.bgFilter}>
        <div className={styles.bgFilter2}>
          <div className={styles.navTitle}>
            <Icon
              className={styles.icon}
              path={mdiAnvil}
              size={'clamp(2.75rem, 9vw, 3.5rem'}
            />
            <h2 className={styles.title}>Brokkr&apos;s Anvil</h2>
          </div>
          <div className={styles.navContainer} onClick={hideCart}>
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
          <div className={styles.cart} onClick={toggleCart}>
            <Icon
              className={styles.cartIcon}
              path={mdiCart}
              size={'clamp(2rem, 9vw, 2.5rem'}
            />
            {totalItems > 0 && (
              <div className={styles.itemCount}>{totalItems}</div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
