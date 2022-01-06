import React from 'react';
import { createRestyleComponent, useTheme } from '@shopify/restyle';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { IconProps } from './interfaces';
import { Theme } from '../../themes';
import { opacity } from '../../themes/properties';
import Box from '../Box';

const Icon: React.FC<IconProps> = props => {
  const { colors } = useTheme<Theme>();

  return (
    <Box
      sz="sm"
      alignItems="center"
      justifyContent="center"
      borderRadius="circular"
      backgroundColor="transparent"
      {...props}
    >
      <MaterialIcon
        style={{ width: '100%', height: '100%' }}
        color={colors['neutral-dark']}
        {...props}
      />
    </Box>
  );
};

export default createRestyleComponent<IconProps, Theme>([opacity], Icon);
