import React, { forwardRef, useCallback, useState } from 'react';
import { SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from '@shopify/restyle';

import Text from '../Text';
import Box from '../Box';
import Input from '../Input';
import { ColorOptions, TextFieldProps, TypeVariantHeight } from './interfaces';
import { InputRef } from '../Input/interfaces';
import { ITheme } from '../../themes/interface';

const TextField: React.ForwardRefRenderFunction<InputRef, TextFieldProps> = (
  {
    label,
    placeholder,
    variant,
    assistiveText,
    status,
    keyboardType,
    autoCapitalize,
    returnKeyType,
    value,
    ...props
  },
  ref,
) => {
  const [isFocused, setIsFocused] = useState(false);
  const { colors } = useTheme<ITheme>();

  const statusKeyPair = {
    error: colors['feedback-negative-icon'],
    success: colors['feedback-positive-icon'],
    default: colors['fittings-icon-primary-enabled'],
  };

  const statusBorderColor: ColorOptions = {
    error: 'feedback-negative-border',
    success: 'feedback-positive-border',
    default: 'fittings-border-primary-enabled',
  };

  const variantHeight: TypeVariantHeight = {
    small: 'xs',
    medium: 'sm',
  };

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const renderIconPerStatus = () => {
    if (status === 'success') {
      return (
        <Icon name="check-circle" size={16} color={statusKeyPair[status]} />
      );
    }
    if (status === 'error') {
      return (
        <Icon name="alert-circle" size={16} color={statusKeyPair[status]} />
      );
    }
    return <></>;
  };

  return (
    <SafeAreaView>
      {!!label && (
        <Text fs="md" fontWeight="700" color="fittings-text-secondary-enabled">
          {label}
        </Text>
      )}
      <Input
        ref={ref}
        placeholder={placeholder}
        h={variantHeight[variant]}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        returnKeyType={returnKeyType}
        borderColor={
          isFocused
            ? 'feedback-informative-border'
            : statusBorderColor[status || 'default']
        }
        bw="sm"
        value={value}
        borderRadius="sm"
        my="quark"
        px="xs"
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={{
          flex: 1,
          color: colors['fittings-text-primary-enabled'],
        }}
        {...props}
      />
      <Box flexDirection="row" alignItems="center" height={16}>
        {renderIconPerStatus()}
        {!!assistiveText && (
          <Text ml="quark" fs="sm" color="fittings-text-primary-enabled">
            {assistiveText}
          </Text>
        )}
      </Box>
    </SafeAreaView>
  );
};

export default forwardRef(TextField);
