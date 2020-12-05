import React from 'react';
import styled from 'styled-components';
import { Search } from '../components';

export default () => (
  <Header className="row">
    <div className="col-12">
      <div className="row">
        <div className="col-6">
          <Search />
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
