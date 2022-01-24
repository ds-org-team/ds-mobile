import { useTheme } from '@shopify/restyle';
import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { Keyboard, TextInput, TouchableWithoutFeedback } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { Path, Svg } from 'react-native-svg';
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
  const [isFilled, setIsFilled] = useState(false);
  const inputElementRef = useRef<TextInputRef>(null);

  const [text, setText] = useState('');
  const [rawText, setRawText] = useState<string | undefined>('');

  const { colors } = useTheme<Theme>();

  const handleChange = useCallback(
    (newValue: string, rawValue?: string) => {
      setText(newValue);
      setRawText(rawValue);
      if (onChangeText && rawValue) {
        onChangeText(newValue, rawValue);
      } else if (onChangeText) {
        onChangeText(newValue);
      }
      if (inputElementRef.current) {
        inputElementRef.current.value = rawValue || newValue;
      }
      setIsFilled(!!inputElementRef.current?.value);
    },
    [onChangeText],
  );

  const handleChangeMaskedText = useCallback(
    (maskedText, unmaskedText) => {
      setIsFilled(!!inputElementRef.current?.value);
      setText(maskedText);
      setRawText(unmaskedText);
      if (onChangeText && unmaskedText) {
        onChangeText(maskedText, unmaskedText);
      } else if (onChangeText) {
        onChangeText(unmaskedText);
      }
    },
    [onChangeText],
  );

  const handleClear = useCallback(() => {
    handleChange('', '');
    inputElementRef.current?.clear?.();
    setIsFilled(false);
  }, [handleChange]);

  useImperativeHandle(ref, () => ({
    value: inputElementRef.current?.value,
    clear: () => handleClear(),
    focus: () => {
      inputElementRef.current?.focus?.();
      // eslint-disable-next-line no-underscore-dangle
      inputElementRef.current?._inputElement?.focus();
    },
    blur: () => inputElementRef.current?.blur?.(),
  }));

  const renderRightComponent = useCallback(() => {
    if (renderRightIcon) {
      return renderRightIcon();
    }
    if (isFilled) {
      return (
        <TouchableWithoutFeedback onPress={handleClear}>
          <Svg width={24} height={24} viewBox="0 0 24 24">
            <Path
              fill={colors['neutral-dark']}
              d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
            />
          </Svg>
        </TouchableWithoutFeedback>
      );
    }
    return <></>;
  }, [colors, handleClear, isFilled, renderRightIcon]);

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
          value={text || rawText}
          options={optionsPerType[type] || options}
          testID="Input"
          placeholder={placeholder}
          placeholderTextColor={colors['neutral-dark']}
          includeRawValueInChangeText
          onChangeText={handleChangeMaskedText}
          onSubmitEditing={() => {
            Keyboard.dismiss();
          }}
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

      {renderRightComponent()}
    </Box>
  );
};

export default forwardRef(Input);
