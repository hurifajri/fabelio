import { Card } from '../components';
import PropTypes from 'prop-types';
import React from 'react';

const Main = function ({ products }) {
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

export default Main;

Main.propTypes = {
  products: PropTypes.array.isRequired,
};
