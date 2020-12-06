import { Header, Main } from '../containers/';
import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { GlobalStyle } from '../utils/';
import styled from 'styled-components';

export default () => {
  // Initial array to store the result data
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://www.mocky.io/v2/5c9105cb330000112b649af8',
        {
          params: {
            _limit: 10,
          },
        }
      );
      setData(result.data);
    };

    fetchData();
  }, []);

  // In case the result data is undefined, assign an empty array
  const furnitureStyles = data?.furniture_styles || [];
  const products = data?.products || [];

  // Store typed search term by user
  const [searchTerm, setSearchTerm] = useState('');

  // Record the user typing
  const handleChangeSearch = event => setSearchTerm(event.target.value);

  // Store the selected furniture style from the filter and get only the label
  const [selectedStyle, setSelectedStyle] = useState(null);
  const selectedStyleLabel = selectedStyle?.map(item => item.label);

  // Store the selected furniture style from the filter and get only the value
  const [selectedTime, setSelectedTime] = useState(null);
  const selectedTimeValue = selectedTime?.map(item => item.value);

  // HOC callback for filterSearch
  const search = searchTerm => product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase());

  // Determines whether search term is match to product name
  const filterSearch = products.filter(search(searchTerm));

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

  const filteredProducts = searchTerm
    ? rawFilteredProducts.filter(search(searchTerm))
    : rawFilteredProducts;

  console.log(Boolean(selectedTime));
  console.log('filterSearch', filterSearch);
  console.log('filterStyle', filterStyle);
  console.log('filterTime', filterTime);
  console.log('filterTimeMore', filterTimeMore);
  console.log('joinedFilteredProducts', joinedFilteredProducts);
  console.log('rawFilteredProducts', rawFilteredProducts);
  console.log('filteredProducts', filteredProducts);
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
