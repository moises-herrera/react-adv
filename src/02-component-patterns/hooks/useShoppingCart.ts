import { useState } from 'react';
import { ProductQuantityChange } from '../interfaces/product-quantity-change.interface';
import { ShoppingCart } from '../interfaces/shopping-cart.type';

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<ShoppingCart>({});

  const onProductQuantityChange = ({
    product,
    quantity,
  }: ProductQuantityChange) => {
    const newQuantity = (shoppingCart[product.id]?.quantity || 0) + quantity;

    if (newQuantity < 0) return;

    setShoppingCart((prev) => {
      if (prev?.[product.id] && newQuantity === 0) {
        const { [product.id]: _, ...rest } = prev;
        return rest;
      }

      return {
        ...prev,
        [product.id]: {
          ...product,
          quantity: newQuantity,
        },
      };
    });
  };

  return {
    shoppingCart,
    onProductQuantityChange,
  };
};
