import { ReactElement } from 'react';
import { Product } from './product.interface';

export interface ProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[];
}
