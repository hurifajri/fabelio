import React from 'react';
import styled from 'styled-components';

export default () => <SearchField type="text" placeholder="Search Furniture" />;

const SearchField = styled.input`
  color: var(--white-color);
  font-size: 1rem;
  font-weight: 600;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid var(--white-color);
  width: 100%;
  &:focus {
    outline: none;
    box-shadow: none;
  }
`;
