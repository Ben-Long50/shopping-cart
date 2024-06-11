import styles from './Cart.module.css';
import { Link } from 'react-router-dom';

const Cart = ({ cart }) => {
  let total = 0;
  const cartTotal = cart.forEach((item) => {
    total += item.price * item.quantity;
  });

  return (
    <div id="cart" className={styles.cart}>
      <div className={styles.bgFilter}>
        <div className={styles.bgFilter2}>
          <div className={styles.cartContents}>
            <h1 className={styles.title}>Shopping Cart</h1>
            {cart.map((item, index) => {
              return (
                <>
                  <div className={styles.cartItem} key={item.id}>
                    <div
                      className={styles.cartImg}
                      style={{ backgroundImage: `url(${item.image})` }}
                    ></div>
                    <div className={styles.itemTitle}>{item.title}</div>
                    <div className={styles.quantity}>
                      <p>Quantity:</p>
                      <input
                        className={styles.input}
                        type="number"
                        step="1"
                        value={item.quantity}
                      />
                    </div>
                    <div className={styles.priceTotal}>
                      <p>Price Total:</p>
                      <div>{item.price * item.quantity}</div>
                    </div>
                  </div>
                  <hr />
                </>
              );
            })}
            <div className={styles.total}>
              <h2>Total:</h2>
              <div>{total}</div>
            </div>
            <Link className={styles.button} to="checkout">
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
