import { Card } from '../components';
import React from 'react';
import styled from 'styled-components';

export default () => (
  <Main className="row">
    <div className="col-12">
      <div className="row">
        <div className="col-6">
          <Card />
        </div>
        <div className="col-6">
          <Card />
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <Card />
        </div>
        <div className="col-6">
          <Card />
        </div>
      </div>
    </div>
  </Main>
);

const Main = styled.main``;
