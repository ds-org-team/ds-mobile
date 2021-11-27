import React from 'react';
import { createRestyleComponent, useTheme } from '@shopify/restyle';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { IconProps } from './interfaces';
import { Theme } from '../../themes';
import Box from '../Box';

const Icon: React.FC<IconProps> = props => {
  const { colors } = useTheme<Theme>();

  return (
    <Box
      sz="xs"
      alignItems="center"
      justifyContent="center"
      borderRadius="circular"
      backgroundColor="transparent"
      {...props}
    >
      <MaterialIcon color={colors['neutral-dark']} {...props} />
    </Box>
  );
};

export default createRestyleComponent<IconProps, Theme>([], Icon);
