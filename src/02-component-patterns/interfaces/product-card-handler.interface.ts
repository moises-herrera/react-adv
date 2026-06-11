import { Product } from './product.interface';

export interface ProductCardHandler {
  quantity: number;
  isMaxQuantityReached: boolean;
  maxQuantity?: number;
  product: Product;
  increaseBy: (value: number) => void;
  reset: () => void;
}
