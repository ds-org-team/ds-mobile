/* eslint-disable global-require */
import React from 'react';
import { cleanup, render } from '@testing-library/react-native';
import { ThemeProvider } from '@shopify/restyle';
import Tag from './Tag';
import themeMaestro from '../../themes/maestro';

afterEach(cleanup);

jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => 'Icon');

test('should Checkbox render correctly', async () => {
  const { toJSON } = render(
    <ThemeProvider theme={themeMaestro}>
      <Tag label="Label tag" size="small" />
    </ThemeProvider>,
  );

  expect(toJSON()).toMatchSnapshot();
});
