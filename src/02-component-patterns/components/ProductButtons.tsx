import { CSSProperties, FC, useMemo } from 'react';
import { useProductContext } from '../hooks/useProductContext';
import styles from '../styles/styles.module.css';

export interface ProductButtonsProps {
  className?: string;
  style?: CSSProperties;
}

export const ProductButtons: FC<ProductButtonsProps> = ({
  className = '',
  style,
}) => {
  const { quantity, maxQuantity, increaseBy } = useProductContext();
  const isMaxQuantityReached = useMemo(
    () => Boolean(maxQuantity) && quantity === maxQuantity,
    [quantity, maxQuantity]
  );

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{quantity}</div>
      <button
        className={`${styles.buttonAdd} ${isMaxQuantityReached ? styles.disabled : ''}`}
        disabled={isMaxQuantityReached}
        onClick={() => increaseBy(1)}
      >
        +
      </button>
    </div>
  );
};
