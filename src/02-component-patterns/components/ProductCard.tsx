import { useProduct } from '../hooks/useProduct';
import { ProductContext } from '../contexts/ProductContext';
import { ProductCardProps } from '../interfaces/product-card-props.interface';

import styles from '../styles/styles.module.css';

export const ProductCard = ({ product, children }: ProductCardProps) => {
  const { counter, increaseBy } = useProduct();

  return (
    <ProductContext.Provider value={{ product, counter, increaseBy }}>
      <div className={styles.productCard}>{children}</div>
    </ProductContext.Provider>
  );
};
