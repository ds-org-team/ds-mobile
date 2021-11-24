import React from 'react';
import { cleanup, render } from '@testing-library/react-native';
import { ThemeProvider } from '@shopify/restyle';
import themeMaestro from '../../themes/maestro';
import ListItem from './ListItem';

afterEach(cleanup);

it('should render ListItem component', async () => {
  const { toJSON } = render(
    <ThemeProvider theme={themeMaestro}>
      <ListItem />
    </ThemeProvider>,
  );

  expect(toJSON()).toMatchSnapshot();
});
