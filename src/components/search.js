import React from 'react';
import styled from 'styled-components';

export default ({ placeholder, onChange, value }) => (
  <SearchField
    type="search"
    placeholder={placeholder}
    onChange={onChange}
    value={value}
  />
);

const SearchField = styled.input`
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
