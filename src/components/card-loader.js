import ContentLoader from 'react-content-loader';
import React from 'react';

const CardLoader = function (props) {
  return (
    <ContentLoader
      width="100%"
      viewBox="0 0 700 300"
      backgroundColor="#f5f5f5"
      foregroundColor="#dbdbdb"
      {...props}
    >
      <rect x="50" y="50" rx="3" ry="3" width="250" height="10" />
      <rect x="475" y="50" rx="3" ry="3" width="150" height="15" />
      <rect x="50" y="91" rx="3" ry="3" width="525" height="6" />
      <rect x="50" y="113" rx="3" ry="3" width="500" height="7" />
      <rect x="50" y="139" rx="3" ry="3" width="525" height="6" />
      <rect x="50" y="162" rx="3" ry="3" width="475" height="7" />
      <rect x="50" y="189" rx="3" ry="3" width="500" height="6" />
      <rect x="50" y="225" rx="3" ry="3" width="150" height="10" />
      <rect x="475" y="250" rx="3" ry="3" width="150" height="10" />
      <rect x="4" y="8" rx="3" ry="3" width="7" height="288" />
      <rect x="6" y="289" rx="3" ry="3" width="669" height="8" />
      <rect x="670" y="9" rx="3" ry="3" width="6" height="285" />
      <rect x="5" y="8" rx="3" ry="3" width="669" height="7" />
    </ContentLoader>
  );
};

export default CardLoader;
