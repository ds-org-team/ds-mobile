import React, { useEffect, useRef, useState } from 'react';
import { SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../themes/institucional';

import Text from '../Text';
import Box from '../Box';
import Input from '../Input';
import { TextFieldProps } from './interfaces';
import { InputFowardEvents } from '../Input/interfaces';

const TextField: React.FC<TextFieldProps> = ({
  label,
  placeholder,
  variant,
  assistiveText,
  status,
  keyboardType,
  autoCapitalize,
  returnKeyType,
  value,
  onChange,
}) => {
  const { colors } = useTheme<Theme>();
  const textfieldRef = useRef<InputFowardEvents>(null);

  useEffect(() => {
    if (status === 'error') {
      textfieldRef.current?.error();
    }

    if (status === 'success') {
      textfieldRef.current?.success();
    }
  }, [status]);

  const statusKeyPair = {
    error: colors['feedback-error-base'],
    success: colors['feedback-success-base'],
    default: colors['neutral-dark'],
  };

  const [variantArea] = useState<Custom.HeightComponent>(() => {
    switch (variant) {
      case 'small':
        return 'xs';
      case 'medium':
        return 'sm';
      default:
        return variant;
    }
  });

  return (
    <SafeAreaView>
      {!!label && (
        <Text fs="md" fontWeight="700" color="neutral-darkest">
          {label}
        </Text>
      )}
      <Input
        ref={textfieldRef}
        placeholder={placeholder}
        variant={variantArea}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        returnKeyType={returnKeyType}
        value={value}
        onChange={e => {
          onChange && onChange({ ...e, current: textfieldRef.current });
        }}
        my="quark"
        p="sm"
        icon="close"
        style={{
          flex: 1,
        }}
      />
      {!!assistiveText && (
        <Box flexDirection="row" alignItems="center">
          {status === 'success' && (
            <Icon
              name="check-circle-outline"
              size={24}
              color={statusKeyPair[status]}
            />
          )}
          {status === 'error' && (
            <Icon
              name="alert-circle-outline"
              size={24}
              color={statusKeyPair[status]}
            />
          )}
          <Text ml="quark" fs="sm" color="neutral-darkest">
            {assistiveText}
          </Text>
        </Box>
      )}
    </SafeAreaView>
  );
};

export default TextField;
