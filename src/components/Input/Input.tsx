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
import { ITheme } from '../../themes/interface';
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
    icon,
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
    ...props
  },
  ref,
) => {
  const [isFilled, setIsFilled] = useState(false);
  const inputElementRef = useRef<TextInputRef>(null);

  const { colors } = useTheme<ITheme>();

  const handleChange = useCallback(
    (newValue: string) => {
      if (onChangeText) {
        onChangeText(newValue);
      }

      if (inputElementRef.current) {
        inputElementRef.current.value = newValue;
      }

      setIsFilled(!!inputElementRef.current?.value);
    },
    [onChangeText],
  );

  const handleClear = useCallback(() => {
    handleChange('');
    inputElementRef.current?.clear?.();
    setIsFilled(false);
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
      bg="surface-default"
      {...props}
    >
      {type ? (
        <TextInputMask
          type={type === 'date' ? 'custom' : type}
          options={optionsPerType[type] || options}
          testID="Input"
          ref={inputElementRef as unknown as LegacyRef<TextInputMask>}
          placeholder={placeholder}
          placeholderTextColor={colors['fittings-text-secondary-enabled']}
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
          selectionColor={colors['fittings-text-secondary-enabled']}
          style={style}
          secureTextEntry={secureTextEntry}
        />
      ) : (
        <TextInput
          textContentType="password"
          testID="Input"
          ref={inputElementRef}
          placeholder={placeholder}
          placeholderTextColor={colors['fittings-text-secondary-enabled']}
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
          selectionColor={colors['fittings-text-secondary-enabled']}
          style={style}
          secureTextEntry={secureTextEntry}
        />
      )}

      {icon && isFilled && (
        <TouchableWithoutFeedback onPress={handleClear}>
          <Box ml="quark">
            <Icon
              name={icon}
              size={24}
              color={
                isFilled
                  ? colors['action-main-primary']
                  : colors['fittings-icon-primary-enabled']
              }
            />
          </Box>
        </TouchableWithoutFeedback>
      )}
    </Box>
  );
};

export default forwardRef(Input);
