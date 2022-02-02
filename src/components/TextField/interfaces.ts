import { KeyboardTypeOptions, ReturnKeyTypeOptions } from 'react-native';
import { ITheme } from '../../themes/interface';
import { InputProps } from '../Input/interfaces';

type TextFieldProps = {
  variant: 'small' | 'medium';
} & Partial<{
  label: string;
  assistiveText: string;
  placeholder: string;
  status: 'success' | 'error' | undefined;
  value: string;
  keyboardType: KeyboardTypeOptions;
  autoCapitalize: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  returnKeyType: ReturnKeyTypeOptions;
}> &
  InputProps;

type TypeVariantHeight = {
  [index: string]: Custom.HeightComponent;
};

type ColorOptions = {
  [index: string]: keyof ITheme['colors'];
};

export { TextFieldProps, TypeVariantHeight, ColorOptions };
