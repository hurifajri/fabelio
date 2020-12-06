import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Card = function (props) {
  const { title, subtitle, description, list, footerTitle } = props;

  // Create a readable price format
  const formattedPrice = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  })
    .format(subtitle)
    .replace(/(\.|,)00$/g, '');

  // Limit character for description
  const limitedDescription = description.substr(0, 114) + '...';

  // Iterate through furniture_styles array
  const item = (style, i) => {
    const hasColon = i !== list.length - i && list.length !== 1 ? ',' : '';
    return <li key={i}>{style + hasColon}</li>;
  };
  const furnitureStyleItem = list.map(item);

  return (
    <CardContainer>
      <CardHeader>
        <Title>{title}</Title>
        <Subtitle>{formattedPrice}</Subtitle>
      </CardHeader>
      <content>
        <p>{limitedDescription}</p>
        <List>{furnitureStyleItem}</List>
      </content>
      <CardFooter>
        <FooterTitle>Pengiriman: {footerTitle} hari</FooterTitle>
      </CardFooter>
    </CardContainer>
  );
};

export default Card;

Card.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  description: PropTypes.string.isRequired,
  list: PropTypes.array,
  footerTitle: PropTypes.string,
};

const CardContainer = styled.div`
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
