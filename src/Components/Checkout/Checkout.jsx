import { useOutletContext, Link } from 'react-router-dom';
import styles from './Checkout.module.css';

const Checkout = () => {
  const [products, setProducts, topProducts, cart, setCart] =
    useOutletContext();

  const handleCheckout = () => {
    setCart([]);
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      updateQuantity(index, cart[index].quantity + 1);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (e.target.value > 0) {
        updateQuantity(index, cart[index].quantity - 1);
      }
    }
  };

  const handleChange = (e, index) => {
    if (e.target.value >= 0) {
      const value = parseInt(e.target.value, 10);
      updateQuantity(index, isNaN(value) ? '' : value);
    }
  };

  const updateQuantity = (index, newQuantity) => {
    const updatedCart = cart.map((item, i) =>
      i === index ? { ...item, quantity: newQuantity } : item,
    );
    setCart(updatedCart);
  };

  const deleteItem = (e, index) => {
    const updatedCart = cart.filter((item, i) => i !== index);
    console.log(updatedCart);
    setCart(updatedCart);
  };

  let total = 0;
  const cartTotal = cart.forEach((item) => {
    total += item.price * item.quantity;
  });

  return (
    <div className={styles.checkoutLayout}>
      <h1 className={styles.title}>Checkout</h1>
      {cart.map((item, index) => (
        <div
          key={item.id}
          style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
        >
          <div className={styles.checkoutItem}>
            <div
              className={styles.checkoutImg}
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>
            <div className={styles.titleContainer}>
              <div className={styles.itemTitle}>{item.title}</div>
              <button
                className={styles.button}
                onClick={(e) => deleteItem(e, index)}
              >
                X
              </button>
            </div>

            <div className={styles.quantity}>
              <p>Quantity:</p>
              <input
                className={styles.input}
                type="number"
                step="1"
                value={item.quantity}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
            </div>
            <div className={styles.priceTotal}>
              <p>Price Total:</p>
              <div>{(item.price * item.quantity).toFixed(2)}</div>
            </div>
          </div>
        </div>
      ))}
      <div className={styles.total}>
        <div className={styles.totalTitle}>
          <h2>Total:</h2>
          <div>{total.toFixed(2)}</div>
        </div>
        <Link to="/" className={styles.completeButton} onClick={handleCheckout}>
          Complete Order
        </Link>
      </div>
    </div>
  );
};
export default Checkout;
