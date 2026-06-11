import { CSSProperties, JSX } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import { useProduct } from '../hooks/useProduct';
import { Product } from '../interfaces/product.interface';
import { ProductInitialValues } from '../interfaces/product-initial-values.interface';
import { ProductCardHandler } from '../interfaces/product-card-handler.interface';

import styles from '../styles/styles.module.css';

export interface ProductCardProps {
  product: Product;
  children: (args: ProductCardHandler) => JSX.Element;
  className?: string;
  style?: CSSProperties;
  initialValues?: Partial<ProductInitialValues>;
}

export const ProductCard = ({
  product,
  children,
  className = '',
  style,
  initialValues,
}: ProductCardProps) => {
  const { counter, isMaxQuantityReached, increaseBy, reset } = useProduct({
    initialValues,
  });

  return (
    <ProductContext.Provider
      value={{
        product,
        quantity: counter,
        maxQuantity: initialValues?.maxQuantity,
        increaseBy,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          product,
          quantity: counter,
          isMaxQuantityReached,
          maxQuantity: initialValues?.maxQuantity,
          increaseBy,
          reset,
        })}
      </div>
    </ProductContext.Provider>
  );
};
