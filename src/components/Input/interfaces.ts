import { BoxProps } from '@shopify/restyle';
import { TextInputProps, TextInput } from 'react-native';
import { TextInputMaskOptionProp } from 'react-native-masked-text';
import { ITheme } from '../../themes/interface';

export type TextInputMaskType =
  | 'credit-card'
  | 'cpf'
  | 'cnpj'
  | 'zip-code'
  | 'only-numbers'
  | 'money'
  | 'cel-phone'
  | 'date'
  | 'datetime';

export type OptionsPerType = {
  date: TextInputMaskOptionProp;
  money: TextInputMaskOptionProp;
};

type InputProps = Partial<{
  placeholder: string;
  icon: string;
  bw?: Custom.BorderWidth;
  h?: Custom.HeightComponent;
  type?: TextInputMaskType;
  options?: TextInputMaskOptionProp;
}> &
  Partial<BoxProps<ITheme>> &
  TextInputProps;

type TextInputRef = HTMLInputElement &
  TextInput & {
    focus(): void;
    blur(): void;
    error(): void;
    success(): void;
    clearStatus(): void;
    _inputElement: {
      focus(): void;
    };
  };

type InputRef = {
  value: string | undefined;
  focus: () => void;
  blur: () => void;
  clear: () => void;
};

export { InputProps, TextInputRef, InputRef };
