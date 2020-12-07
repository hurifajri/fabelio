import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const SearchComponent = function ({ placeholder, onChange, value }) {
  return (
    <Search
      type="search"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

export default SearchComponent;

SearchComponent.defaultProps = {
  placeholder: 'Search',
};

SearchComponent.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

const Search = styled.input`
  color: var(--color-white);
  font-size: var(--size-big);
  font-weight: var(--weight-bold);
  background-color: transparent;
  border: none;
  border-bottom: 1px solid var(--color-white);
  width: 100%;
  &:focus {
    outline: none;
    box-shadow: none;
  }
`;
