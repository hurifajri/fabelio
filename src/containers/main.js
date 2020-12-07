import { Card, CardLoader } from '../components';
import PropTypes from 'prop-types';
import React from 'react';

const MainContainer = function ({ products, isLoading }) {
  // Create empty dummy data
  const dummy = [];
  for (let i = 0; i <= 7; i++) {
    dummy.push(i);
  }

  return (
    <main>
      <div className="container">
        <div className="row">
          {isLoading &&
            dummy.map((item, i) => (
              <div className="col-6" key={i}>
                <CardLoader />
              </div>
            ))}
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
        </div>
      </div>
    </main>
  );
};

export default MainContainer;

MainContainer.propTypes = {
  products: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
