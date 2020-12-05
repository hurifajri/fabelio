import { Card } from '../components';
import React from 'react';
import styled from 'styled-components';

export default ({ products }) => {
  return (
    <Main className="row">
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
    </Main>
  );
};

const Main = styled.main``;
