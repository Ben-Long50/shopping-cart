import { Link, useOutletContext } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import styles from './Homepage.module.css';

const Homepage = () => {
  const [products, setProducts, topProducts, cart, setCart] =
    useOutletContext();

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerImg}>
          <div className={styles.headerInfo}>
            <h2 className={styles.text}>Welcome to,</h2>
            <h1 className={styles.title}>Brokkr&apos;s Anvil</h1>
            <p className={styles.text}>Top quality dwarven battle armaments</p>
            <Link className={styles.button} to="/store">
              Shop
            </Link>
          </div>
        </div>
      </header>
      <section className={styles.bestSelling}>
        <h1 className={styles.title2}>Best Selling Armaments</h1>
        <div className={styles.bestSellingContainer}>
          <div className={styles.bestSellingGrid}>
            {topProducts.map((product) => (
              <ProductCard
                className={styles.card}
                key={product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                image={product.image}
                price={product.price}
                rating={product.rating.rate}
                count={product.rating.count}
                cart={cart}
                setCart={setCart}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
