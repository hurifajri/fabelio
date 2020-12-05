import React from 'react';
import styled from 'styled-components';

export default props => {
  const { name, price, description, furnitureStyle, deliveryTime } = props;

  // Create a readable price format
  const formattedPrice = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  })
    .format(price)
    .replace(/(\.|,)00$/g, '');

  // Limit character for description
  const limitedDescription = description.substr(0, 114) + '...';

  // Iterate through furniture_styles array
  const furnitureStyleItem = furnitureStyle?.map((style, i) => (
    <li key={i}>{style + (i !== furnitureStyle.length - i ? ',' : '')}</li>
  ));

  return (
    <Card>
      <CardHeader>
        <Title>{name}</Title>
        <Subtitle>{formattedPrice}</Subtitle>
      </CardHeader>
      <CardBody>
        <Description>{limitedDescription}</Description>
        <List>{furnitureStyleItem}</List>
      </CardBody>
      <CardFooter>
        <FooterTitle>Pengiriman: {deliveryTime} hari</FooterTitle>
      </CardFooter>
    </Card>
  );
};

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

const Description = styled.p``;

const List = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  list-style: none;
  padding-left: 0;
  & li {
    margin-right: 5px;
    color: var(--color-primary);
  }
`;

const CardFooter = styled.div`
  text-align: right;
`;

const FooterTitle = styled(Subtitle)`
  color: var(--color-primary);
  text-decoration: underline;
`;
