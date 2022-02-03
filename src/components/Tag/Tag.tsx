import React from 'react';
import { useTheme } from '@shopify/restyle';
import { TagProps } from './interfaces';
import Text from '../Text';
import Box from '../Box';
import Icon from '../Icon';
import { ITheme } from '../../themes/interface';

const Tag: React.FC<TagProps> = ({ label, size, icon, color, ...props }) => {
  const { colors } = useTheme<ITheme>();

  return (
    <Box
      py="quark"
      px="nano"
      borderRadius="sm"
      // backgroundColor="highlight-03-light"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      {...props}
    >
      {icon && (
        <Icon
          color={colors[color || 'fittings-text-primary-enabled']}
          name={icon}
          size={16}
        />
      )}
      <Text
        fs={size === 'small' ? 'xs' : 'sm'}
        fontWeight="500"
        color={color || 'fittings-text-primary-enabled'}
        m="quark"
      >
        {label}
      </Text>
    </Box>
  );
};
export default Tag;
