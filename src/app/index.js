import { Header, Main } from '../containers/';
import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { GlobalStyle } from '../utils/';
import styled from 'styled-components';

export default () => {
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
  return (
    <Fragment>
      <GlobalStyle />
      <Container className="container">
        <Header data={data} />
        <Main data={data} loading={loading} />
      </Container>
    </Fragment>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 100rem;
`;
