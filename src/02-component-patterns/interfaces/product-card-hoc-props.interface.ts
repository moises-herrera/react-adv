import { JSX } from 'react';
import { ProductCardProps } from './product-card-props.interface';

export interface ProductCardHOCProps {
  (props: ProductCardProps): JSX.Element;
  Title: ({ title }: { title?: string }) => JSX.Element;
  Image: ({ img, title }: { img?: string; title?: string }) => JSX.Element;
  Buttons: () => JSX.Element;
}
