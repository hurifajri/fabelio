import { Card } from '../components';
import React from 'react';
import styled from 'styled-components';

export default ({ data, loading }) => {
  const products = (data && data.products) || [];
  return (
    <Main className="row">
      {products.map(product =>
        loading ? (
          <p>Loading...</p>
        ) : (
          <div className="col-6" key={product.name}>
            <Card
              name={product.name}
              price={product.price}
              description={product.description}
              furnitureStyle={product.furniture_style}
              deliveryTime={product.delivery_time}
              loading={loading}
            />
          </div>
        )
      )}
    </Main>
  );
};

const Main = styled.main``;
