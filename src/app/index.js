import React from 'react';
import './simple-grid.min.css';
import styled from 'styled-components';

export default () => (
  <Container className="container">
    <Header className="row">
      <div className="col-12">
        <div className="row">
          <div className="col-12">search bar</div>
        </div>
        <div className="row">
          <div className="col-6">filter 1</div>
          <div className="col-6">filter 2</div>
        </div>
      </div>
    </Header>
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
  </Container>
);

const Container = styled.div``;

const Header = styled.header``;

const Main = styled.main``;
