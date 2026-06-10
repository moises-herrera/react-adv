import { FC, JSX } from 'react';
import { ProductCardProps } from '../components/ProductCard';
import {
  ProductButtonsProps,
  ProductImageProps,
  ProductTitleProps,
} from '../components';

export interface ProductCardHOCProps {
  (props: ProductCardProps): JSX.Element;
  Title: FC<ProductTitleProps>;
  Image: FC<ProductImageProps>;
  Buttons: FC<ProductButtonsProps>;
}
