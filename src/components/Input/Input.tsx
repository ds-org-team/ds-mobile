import { useTheme } from '@shopify/restyle';
import React, {
  forwardRef,
  LegacyRef,
  useCallback,
  useImperativeHandle,
  useRef,
} from 'react';
import { Keyboard, TextInput } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { Theme } from '../../themes';
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

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
  {
    placeholder,
    editable,
    multiline,
    numberOfLines,
    maxLength,
    keyboardType,
    keyboardAppearance,
    autoCapitalize,
    style,
    returnKeyType,
    onChangeText,
    type,
    options,
    value,
    secureTextEntry,
    renderRightIcon,
    ...props
  },
  ref,
) => {
  const inputElementRef = useRef<TextInputRef>(null);

  const { colors } = useTheme<Theme>();

  const handleChange = useCallback(
    (newValue: string) => {
      if (onChangeText) {
        onChangeText(newValue);
      }

      if (inputElementRef.current) {
        inputElementRef.current.value = newValue;
      }
    },
    [onChangeText],
  );

  const handleClear = useCallback(() => {
    handleChange('');
    inputElementRef.current?.clear?.();
  }, [handleChange]);

  useImperativeHandle(ref, () => ({
    value: inputElementRef.current?.value?.replace(/[^a-z0-9]/gi, ''),
    clear: () => handleClear(),
    focus: () => {
      inputElementRef.current?.focus?.();
      // eslint-disable-next-line no-underscore-dangle
      inputElementRef.current?._inputElement?.focus();
    },
    blur: () => inputElementRef.current?.blur?.(),
  }));

  return (
    <Box
      flexDirection="row"
      alignItems="center"
      testID="input-box"
      bg="white"
      {...props}
    >
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
          keyboardAppearance={keyboardAppearance}
          returnKeyType={returnKeyType}
          numberOfLines={numberOfLines}
          autoCapitalize={autoCapitalize}
          selectionColor={colors['neutral-dark']}
          style={style}
          secureTextEntry={secureTextEntry}
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
          keyboardAppearance={keyboardAppearance}
          returnKeyType={returnKeyType}
          numberOfLines={numberOfLines}
          autoCapitalize={autoCapitalize}
          selectionColor={colors['neutral-dark']}
          style={style}
          secureTextEntry={secureTextEntry}
        />
      )}

      {renderRightIcon && renderRightIcon()}
    </Box>
  );
};

export default forwardRef(Input);
