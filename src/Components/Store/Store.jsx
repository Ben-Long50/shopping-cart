import ProductCard from '../ProductCard/ProductCard';
import styles from './Store.module.css';
import { useOutletContext } from 'react-router-dom';

const Store = () => {
  const [products, setProducts, topProducts, cart, setCart] =
    useOutletContext();

  return (
    <div className={styles.storeLayout}>
      <h1 className={styles.title}>Store</h1>
      <div className={styles.storeList}>
        {products.map((product) => (
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
  );
};

export default Store;
