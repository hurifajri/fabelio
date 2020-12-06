import { Filter, Search } from '../components';
import React from 'react';
import styled from 'styled-components';

export default ({
  searchTerm,
  onChangeSearch,
  furnitureStyles,
  selectedStyle,
  onSelectStyle,
  selectedTime,
  onSelectTime,
}) => {
  // The initial data for delivery time filter
  const deliveryTime = [
    { label: '1 Week', value: 7 },
    { label: '2 Weeks', value: 14 },
    { label: '1 Month', value: 28 },
    { label: 'More', value: 0 },
  ];
  return (
    <Header className="row">
      <div className="col-12">
        <div className="row">
          <div className="col-6">
            <Search
              placeholder="Search Furniture"
              value={searchTerm}
              onChange={onChangeSearch}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <Filter
              placeholderButtonLabel="Furniture Style"
              data={furnitureStyles}
              value={selectedStyle}
              onChange={onSelectStyle}
            />
          </div>
          <div className="col-6">
            <Filter
              placeholderButtonLabel="Delivery Time"
              data={deliveryTime}
              value={selectedTime}
              onChange={onSelectTime}
            />
          </div>
        </div>
      </div>
    </Header>
  );
};

const Header = styled.header`
  background-color: var(--color-primary);
`;
