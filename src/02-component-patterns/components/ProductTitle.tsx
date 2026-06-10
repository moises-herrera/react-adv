import { CSSProperties, FC } from 'react';
import { useProductContext } from '../hooks/useProductContext';
import styles from '../styles/styles.module.css';

export interface ProductTitleProps {
  title?: string;
  className?: string;
  style?: CSSProperties;
}

export const ProductTitle: FC<ProductTitleProps> = ({
  title,
  className = '',
  style,
}) => {
  const { product } = useProductContext();

  return (
    <span className={`${styles.productDescription} ${className}`} style={style}>
      {title || product.title}
    </span>
  );
};
