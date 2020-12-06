import { Card } from '../components';
import React from 'react';

export default ({ products }) => {
  return (
    <main className="row">
      {products.map(product => (
        <div className="col-6" key={product.name}>
          <Card
            name={product.name}
            price={product.price}
            description={product.description}
            furnitureStyle={product.furniture_style}
            deliveryTime={product.delivery_time}
          />
        </div>
      ))}
    </main>
  );
};
