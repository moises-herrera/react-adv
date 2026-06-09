import { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';

export const useProductContext = () => {
  const context = useContext(ProductContext);

  if (!context || Object.keys(context).length === 0) {
    throw new Error(
      'useProductContext must be used within a ProductCard component'
    );
  }

  return context;
};
