import App from '../../app';
import React from 'react';
import { render } from '@testing-library/react';

it('Renders without crashing', () => {
  render(<App />);
});
