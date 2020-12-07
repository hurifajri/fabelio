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
      {/* Title */}
      <rect x="50" y="50" rx="3" ry="3" width="250" height="15" />
      {/* Subtitle */}
      <rect x="480" y="50" rx="3" ry="3" width="150" height="12" />
      {/* Content */}
      <rect x="50" y="91" rx="3" ry="3" width="530" height="7" />
      <rect x="50" y="113" rx="3" ry="3" width="525" height="7" />
      <rect x="50" y="139" rx="3" ry="3" width="520" height="7" />
      {/* List */}
      <rect x="50" y="175" rx="3" ry="3" width="200" height="12" />
      {/* Footer title */}
      <rect x="430" y="210" rx="3" ry="3" width="200" height="12" />
      {/* Top line */}
      <rect x="5" y="8" rx="3" ry="3" width="669" height="7" />
      {/* Right line  */}
      <rect x="670" y="9" rx="3" ry="3" width="7" height="247" />
      {/* Bottom line */}
      <rect x="6" y="250" rx="3" ry="3" width="669" height="7" />
      {/* Left line */}
      <rect x="4" y="8" rx="3" ry="3" width="7" height="247" />
    </ContentLoader>
  );
};

export default CardLoader;
