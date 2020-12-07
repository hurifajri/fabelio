import { Card, CardLoader } from '../components';
import { Helper } from '../utils';
import PropTypes from 'prop-types';
import React from 'react';

const MainContainer = function ({ products, isLoading }) {
  // Create empty dummy data
  const dummy = [];
  for (let i = 1; i <= 7; i++) {
    dummy.push(i);
  }

  return (
    <main>
      <div className="container">
        <div className="row">
          {isLoading &&
            dummy.map(item => (
              <div className="col-6" key={item}>
                <CardLoader />
              </div>
            ))}
          {products.map(
            ({ name, price, description, furniture_style, delivery_time }) => {
              // Create a readable price format
              const formattedPrice = Helper.formatCurrency(price);

              // Limit character for description
              const formattedDescription = Helper.limitChars(description, 114);

              // Iterate through furniture_styles array to get the item
              const item = (style, i) => {
                const hasColon = Helper.colonable(furniture_style, i);
                return <li key={i}>{style + hasColon}</li>;
              };
              const furnitureStyleItem = furniture_style.map(item);

              const deliveryTime = `Pengiriman: ${delivery_time} hari`;

              return (
                <div className="col-6" key={name}>
                  <Card
                    title={name}
                    subtitle={formattedPrice}
                    description={formattedDescription}
                    list={furnitureStyleItem}
                    footerTitle={deliveryTime}
                  />
                </div>
              );
            }
          )}
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
