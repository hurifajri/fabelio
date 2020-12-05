import React from 'react';
import styled from 'styled-components';

export default () => (
  <Card>
    <CardHeader>
      <Title>Product Name</Title>
      <Subtitle>Price</Subtitle>
    </CardHeader>
    <CardBody>
      <p>adasd</p>
    </CardBody>
    <CardFooter>
      <FooterTitle>Delivery Days</FooterTitle>
    </CardFooter>
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

const Title = styled.h2`
  font-size: var(--size-big);
  font-weight: var(--weight-bold);
  margin: 0;
`;

const Subtitle = styled.span`
  color: var(--color-secondary);
  font-size: var(--size-normal);
  font-weight: var(--weight-bold);
`;

const CardBody = styled.div``;

const CardFooter = styled.div`
  text-align: right;
`;

const FooterTitle = styled(Subtitle)`
  color: var(--color-primary);
  text-decoration: underline;
`;
