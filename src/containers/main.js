import React from 'react';
import styled from 'styled-components';

export default () => (
  <Main className="row">
    <div className="col-12">
      <div className="row">
        <div className="col-6">Product 1</div>
        <div className="col-6">Product 2</div>
      </div>
      <div className="row">
        <div className="col-6">Product 3</div>
        <div className="col-6">Product 4</div>
      </div>
    </div>
  </Main>
);

const Main = styled.main``;
