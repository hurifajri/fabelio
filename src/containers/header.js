import { Filter, Search } from '../components';
import React from 'react';
import styled from 'styled-components';

export default ({ searchTerm, onChangeSearch }) => {
  // const onChange = e => console.log(e.target.value);
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
            <Filter placeholderButtonLabel="Furniture Style" />
          </div>
          <div className="col-6">
            <Filter placeholderButtonLabel="Delivery Time" />
          </div>
        </div>
      </div>
    </Header>
  );
};

const Header = styled.header`
  background-color: var(--color-primary);
`;
