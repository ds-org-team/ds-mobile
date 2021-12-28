import { useTheme } from '@shopify/restyle';
import React, {
  forwardRef,
  LegacyRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { Keyboard, TextInput, TouchableWithoutFeedback } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Theme, borderWidth } from '../../themes';
import Box from '../Box';
import { InputProps, InputRef, TextInputRef } from './interfaces';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const optionsPerType: any = {
  date: {
    mask: '99/99/9999',
  },
  money: {
    unit: 'R$ ',
  },
};

const Input: React.FC<InputProps> = (
  {
    placeholder,
    variant,
    editable,
    multiline,
    numberOfLines,
    icon,
    maxLength,
    keyboardType,
    autoCapitalize,
    style,
    returnKeyType,
    onChangeText,
    type,
    options,
    value,
    ...props
  },
  ref,
) => {
  const { colors } = useTheme<Theme>();
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const [hasError, setHasError] = useState(false);
  const [hasSuccess, setHasSuccess] = useState(false);

  const [colorStatus, setColorStatus] =
    useState<keyof Theme['colors']>('neutral-dark');

  const inputElementRef = useRef<InputRef>(null);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);

    if (!hasError && !hasSuccess) {
      setColorStatus('primary-base');
    }
  }, [hasError, hasSuccess]);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    if (!hasError && !hasSuccess) {
      setColorStatus('neutral-dark');
    }
  }, [hasError, hasSuccess]);

  const handleChange = useCallback(
    (newValue: string) => {
      // eslint-disable-next-line no-param-reassign
      ref.current.value = newValue;

      if (newValue.length > 0) {
        setIsFilled(true);
      } else {
        setIsFilled(false);
      }
    },
    [ref],
  );

  const handleClear = useCallback(() => {
    handleChange('');
    inputElementRef.current?.clear?.();
    setIsFilled(false);
  }, [handleChange]);

  useImperativeHandle(ref, () => ({
    value: inputElementRef.current?.value,
  }));

  return (
    <Box flexDirection="row" alignItems="center" testID="input-box" {...props}>
      {type ? (
        <TextInputMask
          type={type === 'date' ? 'custom' : type}
          options={optionsPerType[type] || options}
          testID="Input"
          ref={inputElementRef as unknown as LegacyRef<TextInputMask>}
          placeholder={placeholder}
          placeholderTextColor={colors['neutral-dark']}
          onChangeText={handleChange}
          onSubmitEditing={() => {
            Keyboard.dismiss();
          }}
          value={inputElementRef.current?.value}
          editable={editable}
          multiline={multiline}
          maxLength={maxLength}
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
          numberOfLines={numberOfLines}
          autoCapitalize={autoCapitalize}
          selectionColor={colors['neutral-dark']}
          style={style}
        />
      ) : (
        <TextInput
          textContentType="password"
          testID="Input"
          ref={inputElementRef}
          placeholder={placeholder}
          placeholderTextColor={colors['neutral-dark']}
          onChangeText={handleChange}
          onSubmitEditing={() => {
            Keyboard.dismiss();
          }}
          value={value}
          editable={editable}
          multiline={multiline}
          maxLength={maxLength}
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
          numberOfLines={numberOfLines}
          autoCapitalize={autoCapitalize}
          selectionColor={colors['neutral-dark']}
          style={style}
        />
      )}

      {icon && (
        <TouchableWithoutFeedback onPress={handleClear}>
          <Box ml="quark">
            <Icon
              name={icon}
              size={24}
              color={
                isFocused || isFilled
                  ? colors['primary-base']
                  : colors['neutral-dark']
              }
            />
          </Box>
        </TouchableWithoutFeedback>
      )}
    </Box>
  );
};

export default createRestyleComponent<InputProps, Theme>(
  [spacing, borderWidth],
  forwardRef(Input as ForwardRefRenderFunction<InputProps>),
);
