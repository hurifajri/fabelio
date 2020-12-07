import { Main } from '../../containers';
import React from 'react';
import { render } from '@testing-library/react';

const props = {
  products: [],
  isLoading: false,
};

it('Renders without crashing', () => {
  render(<Main {...props} />);
});
