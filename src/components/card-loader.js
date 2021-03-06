import CardLoader from 'react-content-loader';
import React from 'react';

export default props => (
  <CardLoader
    width="100%"
    viewBox="0 0 700 300"
    backgroundColor="#f5f5f5"
    foregroundColor="#dbdbdb"
    {...props}
  >
    {/* Title */}
    <rect x="50" y="50" rx="3" ry="3" width="250" height="15" />
    {/* Subtitle */}
    <rect x="500" y="50" rx="3" ry="3" width="150" height="12" />
    {/* Content */}
    <rect x="50" y="111" rx="3" ry="3" width="530" height="9" />
    <rect x="50" y="143" rx="3" ry="3" width="525" height="9" />
    <rect x="50" y="175" rx="3" ry="3" width="520" height="9" />
    {/* List */}
    <rect x="50" y="220" rx="3" ry="3" width="200" height="12" />
    {/* Footer title */}
    <rect x="450" y="250" rx="3" ry="3" width="200" height="12" />
    {/* Top line */}
    <rect x="5" y="8" rx="3" ry="3" width="695" height="7" />
    {/* Right line  */}
    <rect x="693" y="9" rx="3" ry="3" width="7" height="400" />
    {/* Bottom line */}
    <rect x="6" y="293" rx="3" ry="3" width="695" height="7" />
    {/* Left line */}
    <rect x="4" y="8" rx="3" ry="3" width="7" height="400" />
  </CardLoader>
);
