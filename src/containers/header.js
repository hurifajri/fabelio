import React from 'react';
import styled from 'styled-components';

export default () => (
  <Header className="row">
    <div className="col-12">
      <div className="row">
        <div className="col-6">
          <SearchField type="text" placeholder="Search Furniture" />
        </div>
      </div>
      <div className="row">
        <div className="col-6">filter 1</div>
        <div className="col-6">filter 2</div>
      </div>
    </div>
  </Header>
);

const Header = styled.header`
  background-color: var(--main-color);
`;

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
