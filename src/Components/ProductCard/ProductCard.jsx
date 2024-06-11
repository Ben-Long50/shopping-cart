import styles from './ProductCard.module.css';
import StarRatings from 'react-star-ratings';

const ProductCard = ({ title, description, image, price, rating, count }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
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
        <button className={styles.cartButton}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
