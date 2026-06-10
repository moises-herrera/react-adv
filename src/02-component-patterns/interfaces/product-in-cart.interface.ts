import { Product } from './product.interface';

export interface ProductInCart extends Product {
  quantity: number;
}
