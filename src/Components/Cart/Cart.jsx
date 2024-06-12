import styles from './Cart.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Cart = ({ cart, setCart, hideCart }) => {
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
            <Link className={styles.button} to="checkout" onClick={hideCart}>
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
