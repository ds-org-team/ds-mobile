import React from 'react';
import { cleanup, render } from '@testing-library/react-native';
import { ThemeProvider } from '@shopify/restyle';
import { themeInstitucional } from '../../themes';

import Box from './Box';

afterEach(cleanup);

test('should be action-main-primary as background-color', async () => {
  const { toJSON } = render(
    <ThemeProvider theme={themeInstitucional}>
      <Box backgroundColor="action-main-primary" />
    </ThemeProvider>,
  );

  expect(toJSON()).toMatchSnapshot();
});

test('should be large as margin', async () => {
  const { toJSON } = render(
    <ThemeProvider theme={themeInstitucional}>
      <Box margin="lg" />
    </ThemeProvider>,
  );

  expect(toJSON()).toMatchSnapshot();
});

test('should be Box render correctly', async () => {
  const { toJSON } = render(<Box />);

  expect(toJSON()).toMatchSnapshot();
});
