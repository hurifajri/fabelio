import { Const } from '../../utils';
import { Filter } from '../../components';
import React from 'react';
import { render } from '@testing-library/react';

const props = {
  data: Const.DELIVERY_TIME,
};

it('Renders without crashing', () => {
  render(<Filter {...props} />);
});
