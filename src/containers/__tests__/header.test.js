import { Const } from '../../utils';
import { Header } from '../../containers';
import React from 'react';
import { render } from '@testing-library/react';

const props = {
  data: Const.DELIVERY_TIME,
};

it('Renders without crashing', () => {
  render(<Header {...props} />);
});
