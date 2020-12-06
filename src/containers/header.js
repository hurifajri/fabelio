import { Filter, Search } from '../components';
import { Const } from '../utils';
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
}) => (
  <Header className="row">
    <div className="col-12">
      <div className="row">
        <div className="col-6">
          <Search
            placeholder={Const.SEARCH}
            value={searchTerm}
            onChange={onChangeSearch}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <Filter
            placeholderButtonLabel={Const.FILTER_FURNITURE}
            data={furnitureStyles}
            value={selectedStyle}
            onChange={onSelectStyle}
          />
        </div>
        <div className="col-6">
          <Filter
            placeholderButtonLabel={Const.FILTER_DELIVERY}
            data={Const.DELIVERY_TIME}
            value={selectedTime}
            onChange={onSelectTime}
          />
        </div>
      </div>
    </div>
  </Header>
);

const Header = styled.header`
  background-color: var(--color-primary);
`;
