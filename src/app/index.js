import { GlobalStyle, Path } from '../utils/';
import { Header, Main } from '../containers/';
import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import { useApi, useFilter } from '../hooks';

export default () => {
  // Fetch data by using hook
  const [data] = useApi(`${Path.BASE}${Path.ID}`);

  // In case the result data is undefined, assign an empty array
  const furnitureStyles = data?.furniture_styles || [];
  const products = data?.products || [];

  // Store typed search term by user
  const [searchTerm, setSearchTerm] = useState('');
  const handleChangeSearch = event => setSearchTerm(event.target.value);

  // Store the selected furniture style and delivery time from the filters and get only the label and value
  const [selectedStyle, setSelectedStyle] = useState([]);
  const [selectedTime, setSelectedTime] = useState([]);
  const getItem = (array, callback) => array.map(callback);
  const labelCallback = item => item.label;
  const valueCallback = item => item.value;
  const selectedStyleLabel = getItem(selectedStyle, labelCallback);
  const selectedTimeValue = getItem(selectedTime, valueCallback);

  // Determines whether search term is match to product name
  const search = searchTerm => product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase());

  // Determines whether filter for furniture style is selected
  const filterStyle = products?.filter(product =>
    selectedStyleLabel?.some(r => product.furniture_style.indexOf(r) >= 0)
  );

  // Determines whether filter for exact delivery time is selected
  const filterTime = products?.filter(product =>
    selectedTimeValue?.includes(parseInt(product.delivery_time))
  );

  // Determines whether filter for non-exact delivery time is selected
  const filterTimeMore = selectedTimeValue?.includes(0)
    ? products?.filter(product => parseInt(product.delivery_time) % 7 !== 0)
    : [];

  // Filter products by search term, furniture style and delivery time
  const joinedFilteredProducts = [
    ...filterStyle,
    ...filterTime,
    ...filterTimeMore,
  ];

  // Remove duplicate element
  const rawFilteredProducts = joinedFilteredProducts.filter(
    (item, index) => joinedFilteredProducts.indexOf(item) === index
  );

  const filteredProducts =
    !searchTerm && selectedStyle.length === 0 && selectedTime.length === 0
      ? products
      : searchTerm && selectedStyle.length === 0 && selectedTime.length === 0
      ? products.filter(search(searchTerm))
      : rawFilteredProducts.filter(search(searchTerm));

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
