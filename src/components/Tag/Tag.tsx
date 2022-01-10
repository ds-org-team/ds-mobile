import React from 'react';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../themes/institucional';
import { TagProps } from './interfaces';
import Text from '../Text';
import Box from '../Box';
import Icon from '../Icon';

const Tag: React.FC<TagProps> = ({ label, size, icon, color, ...props }) => {
  const { colors } = useTheme<Theme>();

  return (
    <Box
      py="quark"
      px="nano"
      borderRadius="sm"
      backgroundColor="highlight-03-light"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      {...props}
    >
      {icon && (
        <Icon
          color={colors[color || 'highlight-03-dark']}
          name={icon}
          size={16}
        />
      )}
      <Text
        fs={size === 'small' ? 'xs' : 'sm'}
        fontWeight="500"
        color={color || 'highlight-03-dark'}
        m="quark"
      >
        {label}
      </Text>
    </Box>
  );
};
export default Tag;
