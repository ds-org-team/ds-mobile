import React from 'react';
import { useTheme } from '@shopify/restyle';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { IconProps } from './interfaces';
import { Theme } from '../../themes';
import Box from '../Box';

const Icon: React.FC<IconProps> = ({ name, color, size, ...props }) => {
  const { colors } = useTheme<Theme>();

  return (
    <Box
      alignItems="center"
      justifyContent="center"
      borderRadius="circular"
      backgroundColor="transparent"
      {...props}
    >
      <MaterialIcon
        name={name}
        size={size || 16}
        color={color || colors['neutral-dark']}
      />
    </Box>
  );
};

export default Icon;
