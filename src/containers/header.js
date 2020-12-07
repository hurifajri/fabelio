import { Filter, Search } from '../components';
import { Const } from '../utils';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = function (props) {
  const {
    searchTerm,
    onChangeSearch,
    furnitureStyles,
    selectedStyle,
    onSelectStyle,
    selectedTime,
    onSelectTime,
  } = props;

  return (
    <Header>
      <div className="container">
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
          <div className="col-6 filter">
            <Filter
              placeholderButtonLabel={Const.FILTER_FURNITURE}
              data={furnitureStyles}
              value={selectedStyle}
              onChange={onSelectStyle}
            />
          </div>
          <div className="col-6 filter">
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
};

export default HeaderContainer;

HeaderContainer.propTypes = {
  searchTerm: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChangeSearch: PropTypes.func,
  furnitureStyles: PropTypes.array,
  selectedStyle: PropTypes.array,
  onSelectStyle: PropTypes.func,
  selectedTime: PropTypes.array,
  onSelectTime: PropTypes.func,
};

const Header = styled.header`
  background-color: var(--color-primary);
`;
