import { Header, Main } from '../containers/';
import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { GlobalStyle } from '../utils/';
import styled from 'styled-components';

export default () => {
  const [searchTerm, setSearchTerm] = useState('');
  const isSearched = searchTerm => product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase());

  const onChangeSearch = e => setSearchTerm(e.target.value);

  // Initial array to store the result data
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch data
  useEffect(() => {
    setLoading(true);
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
      setLoading(false);
    };

    fetchData();
  }, []);

  console.log(data);
  const products = data?.products || [];
  const filteredProducts = products.filter(isSearched(searchTerm));

  return (
    <Fragment>
      <GlobalStyle />
      <Container className="container">
        <Header searchTerm={searchTerm} onChangeSearch={onChangeSearch} />
        <Main products={filteredProducts} />
      </Container>
    </Fragment>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 100rem;
`;
