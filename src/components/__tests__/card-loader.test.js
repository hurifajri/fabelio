import { CardLoader } from '../../components';
import React from 'react';
import { render } from '@testing-library/react';

it('Renders without crashing', () => {
  render(<CardLoader />);
});
