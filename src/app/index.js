import React from 'react';
import { Header, Main } from '../components/';
import './style.css';
import './simple-grid.css';
import styled from 'styled-components';

export default () => (
  <Container className="container">
    <Header />
    <Main />
  </Container>
);

const Container = styled.div`
  width: 100%;
  max-width: 100rem;
`;
