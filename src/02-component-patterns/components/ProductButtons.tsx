import { CSSProperties, FC } from 'react';
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
  const { counter, increaseBy } = useProductContext();

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button className={styles.buttonAdd} onClick={() => increaseBy(1)}>
        +
      </button>
    </div>
  );
};
