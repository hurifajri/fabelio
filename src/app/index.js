import { Const, GlobalStyle } from '../utils/';
import { Header, Main } from '../containers/';
import React, { Fragment } from 'react';
import { useApi, useFilter } from '../hooks';
import styled from 'styled-components';

export default () => {
  // Fetch data by using hook
  const [data] = useApi(`${Const.BASE}${Const.ID}`);

  // In case the result data is undefined, assign an empty array
  const furnitureStyles = data?.furniture_styles || [];
  const products = data?.products || [];

  // Use filter hook for products
  const [
    searchTerm,
    handleChangeSearch,
    selectedStyle,
    setSelectedStyle,
    selectedTime,
    setSelectedTime,
    filteredProducts,
  ] = useFilter(products);

  return (
    <Fragment>
      <GlobalStyle />
      <Container className="container">
        <Header
          furnitureStyles={furnitureStyles}
          searchTerm={searchTerm}
          onChangeSearch={handleChangeSearch}
          selectedStyle={selectedStyle}
          onSelectStyle={setSelectedStyle}
          selectedTime={selectedTime}
          onSelectTime={setSelectedTime}
        />
        <Main products={filteredProducts} />
      </Container>
    </Fragment>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 100rem;
`;
