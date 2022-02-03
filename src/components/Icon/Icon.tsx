import React from 'react';
import { useTheme } from '@shopify/restyle';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { IconProps } from './interfaces';
import Box from '../Box';
import { ITheme } from '../../themes/interface';

const Icon: React.FC<IconProps> = ({ name, color, size, ...props }) => {
  const { colors } = useTheme<ITheme>();

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
        color={color || colors['fittings-icon-primary-enabled']}
      />
    </Box>
  );
};

export default Icon;
