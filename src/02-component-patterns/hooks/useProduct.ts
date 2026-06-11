import { useState } from 'react';
import { ProductInitialValues } from '../interfaces/product-initial-values.interface';

interface UseProductProps {
  initialValues?: Partial<ProductInitialValues>;
}

export const useProduct = ({ initialValues }: UseProductProps) => {
  const quantity = initialValues?.quantity ?? 0;
  const maxQuantity = initialValues?.maxQuantity ?? Infinity;
  const [counter, setCounter] = useState<number>(quantity);

  const increaseBy = (value: number) => {
    const newValue = counter + value;

    if (newValue < 0 || newValue > maxQuantity) {
      return;
    }

    setCounter(newValue);
  };

  const reset = () => {
    setCounter(quantity);
  };

  return {
    counter,
    isMaxQuantityReached: counter === maxQuantity,
    increaseBy,
    reset,
  };
};
