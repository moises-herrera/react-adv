import { useProductContext } from '../hooks/useProductContext';
import styles from '../styles/styles.module.css';

export const ProductTitle = ({ title }: { title?: string }) => {
  const { product } = useProductContext();

  return (
    <span className={styles.productDescription}>{title || product.title}</span>
  );
};
