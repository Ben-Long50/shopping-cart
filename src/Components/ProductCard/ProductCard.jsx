import styles from './ProductCard.module.css';
import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom';

const ProductCard = ({
  id,
  title,
  description,
  image,
  price,
  rating,
  count,
  cart,
  setCart,
}) => {
  function addToCart() {
    let itemInCart = false;

    const newCart = cart.map((item) => {
      if (item.id === id) {
        itemInCart = true;
        item.quantity++;
        return item;
      } else {
        return item;
      }
    });

    if (itemInCart === true) {
      setCart(newCart);
    } else {
      setCart([
        ...cart,
        { id: id, title: title, image: image, price: price, quantity: 1 },
      ]);
    }
  }

  const pathArray = title.split(' ');
  const path = pathArray.join('-');

  return (
    <div to={title} className={styles.card}>
      <h1 className={styles.title}>{title}</h1>
      <div
        className={styles.productImg}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className={styles.ratingContainer}>
        <StarRatings
          rating={rating}
          starRatedColor="red"
          starDimension="1.5rem"
          starSpacing=".25rem"
        />
        <div>{`( ${count} Reviews )`}</div>
      </div>
      <p className={styles.description}>{description}</p>
      <div className={styles.priceContainer}>
        <div className={styles.title}>{price}</div>
        <button onClick={addToCart} className={styles.cartButton}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
