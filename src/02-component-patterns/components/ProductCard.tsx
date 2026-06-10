import { CSSProperties, ReactElement } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import { Product } from '../interfaces/product.interface';

import styles from '../styles/styles.module.css';

export interface ProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
  quantity?: number;
  onChangeQuantity: (quantityToAdd: number) => void;
}

export const ProductCard = ({
  product,
  children,
  className = '',
  style,
  quantity = 0,
  onChangeQuantity,
}: ProductCardProps) => {
  return (
    <ProductContext.Provider
      value={{ product, quantity, increaseBy: onChangeQuantity }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </ProductContext.Provider>
  );
};
