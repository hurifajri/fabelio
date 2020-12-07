import { Card } from '../../components';
import React from 'react';
import { render } from '@testing-library/react';

const props = {
  title: 'This is title',
  description: 'This is description',
  list: [],
};

it('Renders without crashing', () => {
  render(<Card {...props} />);
});
