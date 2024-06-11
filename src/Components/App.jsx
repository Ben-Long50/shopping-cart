import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navigation from './Navigation/Navigation';
import Cart from './Cart/Cart';
import styles from './App.module.css';
import './styles/main.css';
import './styles/reset-css.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [topProducts, setTopProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/products.json');
      const data = await response.json();
      setProducts(data);
      getTopProducts(data);
    };

    fetchData();
    console.log(topProducts);
  }, []);

  const getTopProducts = (products) => {
    const productList = [...products];
    const ratingsCount = productList.map((product) => {
      return product.rating.count;
    });
    const topThreeCount = ratingsCount.sort((a, b) => b - a).splice(0, 3);
    const newList = [];
    for (let i = 0; i < productList.length; i++) {
      if (topThreeCount.includes(productList[i].rating.count)) {
        newList.push(productList[i]);
      }
    }
    setTopProducts(newList);
  };

  return (
    <div className="bgFilter">
      <Navigation />
      <div className={styles.pageLayout}>
        <Outlet context={[products, setProducts, topProducts, cart, setCart]} />
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default App;
