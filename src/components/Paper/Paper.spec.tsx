import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react-native';
import { ThemeProvider } from '@shopify/restyle';
import Pressable from './Paper';
import Text from '../Text';
import { themeInstitucional } from '../../themes';

afterEach(cleanup);

jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => 'Icon');

test('should execute press event function', () => {
  const onEventMock = jest.fn();
  const { getByTestId } = render(
    <ThemeProvider theme={themeInstitucional}>
      <Pressable onPress={onEventMock}>
        <Text>Pressable</Text>
      </Pressable>
    </ThemeProvider>,
  );

  fireEvent.press(getByTestId('pressable'));
  expect(onEventMock).toHaveBeenCalledTimes(1);
});

test('should be surface-default', () => {
  const onEventMock = jest.fn();

  const { getByTestId } = render(
    <ThemeProvider theme={themeInstitucional}>
      <Pressable onPress={onEventMock} bg="surface-default">
        <Text>Pressable</Text>
      </Pressable>
    </ThemeProvider>,
  );

  expect(getByTestId('pressable-box').props.style[0].backgroundColor).toBe(
    '#FFFFFF',
  );
});

test('should render correctly', async () => {
  const { toJSON } = render(
    <ThemeProvider theme={themeInstitucional}>
      <Pressable onPress={() => undefined}>
        <Text>Label Pressable</Text>
      </Pressable>
    </ThemeProvider>,
  );

  expect(toJSON()).toMatchSnapshot();
});
