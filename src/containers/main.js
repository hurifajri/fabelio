import { Card } from '../components';
import React from 'react';

export default ({ products }) => {
  return (
    <main className="row">
      {products.map(product => (
        <div className="col-6" key={product.name}>
          <Card
            title={product.name}
            subtitle={product.price}
            description={product.description}
            list={product.furniture_style}
            footerTitle={product.delivery_time}
          />
        </div>
      ))}
    </main>
  );
};
