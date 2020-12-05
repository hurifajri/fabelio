import React from 'react';
import styled from 'styled-components';

export default () => (
  <Card>
    <CardHeader>
      <Title>Product Name</Title>
      <span>Price</span>
    </CardHeader>
    <CardBody>
      <p>adasd</p>
    </CardBody>
    <CardFooter>Delivery Days</CardFooter>
  </Card>
);

const Card = styled.div`
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 20px 30px;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
`;

const Title = styled.h2``;

const CardBody = styled.div``;

const CardFooter = styled.div``;
