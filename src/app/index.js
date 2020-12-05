import { Header, Main } from '../containers/';
import React, { Fragment } from 'react';
import { GlobalStyle } from '../utils/';
import styled from 'styled-components';

export default () => (
  <Fragment>
    <GlobalStyle />
    <Container className="container">
      <Header />
      <Main />
    </Container>
  </Fragment>
);

const Container = styled.div`
  width: 100%;
  max-width: 100rem;
`;
