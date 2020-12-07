import React from 'react';
import { render } from '@testing-library/react';
import { Search } from '../../components';

it('Renders without crashing', () => {
  render(<Search />);
});
