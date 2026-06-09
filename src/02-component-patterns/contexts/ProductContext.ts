import { createContext } from 'react';
import { Product } from '../interfaces/product.interface';

interface ProductContextProps {
  product: Product;
  counter: number;
  increaseBy: (value: number) => void;
}

export const ProductContext = createContext<ProductContextProps>(
  {} as ProductContextProps
);
