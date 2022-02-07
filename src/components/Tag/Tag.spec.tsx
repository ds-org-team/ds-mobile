/* eslint-disable global-require */
import React from 'react';
import { cleanup, render } from '@testing-library/react-native';
import { ThemeProvider } from '@shopify/restyle';
import Tag from './Tag';
import { themeInstitucional } from '../../themes';

afterEach(cleanup);

jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => 'Icon');

test('should Checkbox render correctly', async () => {
  const { toJSON } = render(
    <ThemeProvider theme={themeInstitucional}>
      <Tag label="Label tag" size="small" />
    </ThemeProvider>,
  );

  expect(toJSON()).toMatchSnapshot();
});
