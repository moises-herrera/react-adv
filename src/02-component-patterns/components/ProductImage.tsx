import { useProductContext } from '../hooks/useProductContext';
import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';

export const ProductImage = ({
  img,
  title,
}: {
  img?: string;
  title?: string;
}) => {
  const { product } = useProductContext();
  const imageToDisplay = img || product.img || noImage;

  return (
    <img
      className={styles.productImg}
      src={imageToDisplay}
      alt={title || product.title}
    />
  );
};
