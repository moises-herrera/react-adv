import { CSSProperties, FC } from 'react';
import { useProductContext } from '../hooks/useProductContext';
import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';

export interface ProductImageProps {
  img?: string;
  title?: string;
  className?: string;
  style?: CSSProperties;
}

export const ProductImage: FC<ProductImageProps> = ({
  img,
  title,
  className = '',
  style,
}) => {
  const { product } = useProductContext();
  const imageToDisplay = img || product.img || noImage;

  return (
    <img
      className={`${styles.productImg} ${className}`}
      style={style}
      src={imageToDisplay}
      alt={title || product.title}
    />
  );
};
