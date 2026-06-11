import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from '../components';
import '../styles/custom-styles.css';
import { products } from '../data/products';

const product = products[0];

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <ProductCard
          key={product.id}
          product={product}
          className="bg-dark text-white"
          initialValues={{
            quantity: 4,
            maxQuantity: 10,
          }}
        >
          {({ quantity, isMaxQuantityReached, increaseBy, reset }) => (
            <>
              <ProductImage
                className="custom-image"
                style={{ boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.2)' }}
              />
              <ProductTitle className="text-bold" />
              <ProductButtons className="custom-buttons" />
              <button onClick={reset}>Reset</button>
              <button onClick={() => increaseBy(-2)}>-2</button>
              {!isMaxQuantityReached && (
                <button onClick={() => increaseBy(2)}>+2</button>
              )}
              <span>
                {quantity} - {isMaxQuantityReached.toString()}
              </span>
            </>
          )}
        </ProductCard>
      </div>
    </div>
  );
};
