/* eslint-disable react/destructuring-assignment */
import React, {
  useCallback,
  useRef,
  useState,
  useImperativeHandle,
  forwardRef,
  ForwardRefRenderFunction,
} from 'react';

import { createRestyleComponent, spacing, useTheme } from '@shopify/restyle';
import { Keyboard, TextInput, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Theme, borderWidth } from '../../themes';
import Box from '../Box';
import { InputFowardEvents, InputProps, InputRef } from './interfaces';

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
    value,
    onChangeText,
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

  const handleClear = useCallback(() => {
    inputElementRef.current?.clear();
    setIsFilled(false);
  }, []);

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

  useImperativeHandle(
    ref,
    () =>
      ({
        focus: () => {
          handleInputFocus();
        },
        blur: () => {
          handleInputBlur();
        },
        error: () => {
          setHasError(true);
          setColorStatus('feedback-error-base');
        },
        success: () => {
          setHasSuccess(true);
          setColorStatus('feedback-success-base');
        },
        clear: () => {
          setHasError(false);
          setHasSuccess(false);
          setColorStatus('neutral-dark');
        },
      } as InputFowardEvents),
  );

  return (
    <Box
      bw={hasError || hasSuccess || isFocused ? 'sm' : 'xs'}
      borderColor={colorStatus}
      borderRadius="sm"
      flexDirection="row"
      alignItems="center"
      h={variant}
      {...props}
    >
      <TextInput
        testID="Input"
        ref={inputElementRef}
        placeholder={placeholder}
        placeholderTextColor={colors['neutral-dark']}
        onBlur={handleInputBlur}
        onSubmitEditing={() => {
          Keyboard.dismiss();
        }}
        onFocus={handleInputFocus}
        onChangeText={onChangeText || handleChange}
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

      {icon && (
        <TouchableWithoutFeedback onPress={handleClear}>
          <Box ml="quark">
            <Icon
              name={icon}
              size={24}
              color={isFocused || isFilled ? 'primary-base' : 'neutral-dark'}
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
