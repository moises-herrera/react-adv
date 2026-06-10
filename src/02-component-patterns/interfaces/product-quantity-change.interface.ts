import { Product } from './product.interface';

export interface ProductQuantityChange {
  product: Product;
  quantity: number;
}
