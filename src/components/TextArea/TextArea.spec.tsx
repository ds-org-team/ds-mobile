import React from 'react';
import { cleanup, render } from '@testing-library/react-native';
import { ThemeProvider } from '@shopify/restyle';
import TextArea from './TextArea';
import { themeInstitucional } from '../../themes';

afterEach(cleanup);

jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => 'Icon');

test('should have a placeholder passed by prop', () => {
  const { getAllByPlaceholderText } = render(
    <ThemeProvider theme={themeInstitucional}>
      <TextArea variant="medium" placeholder="Placeholder" />
    </ThemeProvider>,
  );

  expect(getAllByPlaceholderText('Placeholder').length).toBe(1);
});

test('should have a label passed by prop', () => {
  const { getAllByText } = render(
    <ThemeProvider theme={themeInstitucional}>
      <TextArea
        label="Label do TextArea"
        variant="medium"
        placeholder="Placeholder"
      />
    </ThemeProvider>,
  );

  expect(getAllByText('Label do TextArea').length).toBe(1);
});

test('should have a success feedback', () => {
  const { toJSON } = render(
    <ThemeProvider theme={themeInstitucional}>
      <TextArea
        label="Label do TextArea"
        variant="medium"
        status="success"
        placeholder="Placeholder"
      />
    </ThemeProvider>,
  );

  expect(toJSON()).toMatchSnapshot();
});

test('should have a error feedback', () => {
  const { toJSON } = render(
    <ThemeProvider theme={themeInstitucional}>
      <TextArea
        label="Label do TextArea"
        variant="medium"
        status="error"
        placeholder="Placeholder"
      />
    </ThemeProvider>,
  );

  expect(toJSON()).toMatchSnapshot();
});

test('should be render support text', () => {
  const { container } = render(
    <ThemeProvider theme={themeInstitucional}>
      <TextArea
        variant="medium"
        placeholder="Placeholder"
        assistiveText="Texto de suporte"
      />
    </ThemeProvider>,
  );

  const input = container.props.children;
  expect(input.props.assistiveText).toBe('Texto de suporte');
});

test('should be TextArea render correctly', async () => {
  const { toJSON } = render(
    <ThemeProvider theme={themeInstitucional}>
      <TextArea variant="medium" placeholder="Placeholder" />
    </ThemeProvider>,
  );

  expect(toJSON()).toMatchSnapshot();
});
