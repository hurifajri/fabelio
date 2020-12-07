import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const CardComponent = function ({
  title,
  subtitle,
  description,
  list,
  footerTitle,
}) {
  return (
    <Card>
      <CardHeader>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </CardHeader>
      <div>
        <p>{description}</p>
        <List>{list}</List>
      </div>
      <CardFooter>
        <FooterTitle>{footerTitle}</FooterTitle>
      </CardFooter>
    </Card>
  );
};

export default CardComponent;

CardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  description: PropTypes.string.isRequired,
  list: PropTypes.array,
  footerTitle: PropTypes.string,
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
