import { CSSProperties, ReactElement } from 'react';
import { useProduct } from '../hooks/useProduct';
import { ProductContext } from '../contexts/ProductContext';
import { Product } from '../interfaces/product.interface';

import styles from '../styles/styles.module.css';

export interface ProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
}

export const ProductCard = ({
  product,
  children,
  className = '',
  style,
}: ProductCardProps) => {
  const { counter, increaseBy } = useProduct();

  return (
    <ProductContext.Provider value={{ product, counter, increaseBy }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </ProductContext.Provider>
  );
};
