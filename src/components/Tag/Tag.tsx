import React from 'react';
import { createRestyleComponent } from '@shopify/restyle';
import { TagProps } from './interfaces';
import { Theme } from '../../themes';
import Text from '../Text';
import Box from '../Box';
import Icon from '../Icon';

const Tag: React.FC<TagProps> = ({ label, size, icon, color }) => {
  const contrastColor = color?.includes('dark') ? 'white' : 'black';
  const sizing = size === 'medium' ? { height: '26px' } : { height: '20px' };
  const padding = icon ? 'quark' : 'nano';

  return (
    <Box
      py="nano"
      px="nano"
      borderRadius="nano"
      backgroundColor={color || 'neutral-light'}
      flexDirection="row"
      alignItems="center"
      width="min-content"
      pl={padding}
      {...sizing}
    >
      {icon && (
        <Icon sz="xs" color={contrastColor} name={icon} op="opacity-4" />
      )}
      <Text
        fs={size === 'small' ? 'sm' : 'md'}
        color={contrastColor}
        op="opacity-4"
      >
        {label}
      </Text>
    </Box>
  );
};
export default createRestyleComponent<TagProps, Theme>([], Tag);
