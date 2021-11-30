import React from 'react';
import { createRestyleComponent } from '@shopify/restyle';
import { TagProps } from './interfaces';
import { Theme } from '../../themes';
import Text from '../Text';
import Box from '../Box';
import Icon from '../Icon';

const Tag: React.FC<TagProps> = ({ label, size, icon, color }) => {
  const contrastColor = color?.includes('dark') ? 'white' : 'black';
  const style = size === 'small' ? { height: '20px' } : { height: '26px' };

  return (
    <Box
      py="quark"
      px="quark"
      pr="nano"
      borderRadius="sm"
      backgroundColor={color || 'neutral-light'}
      flexDirection="row"
      style={{ ...style, width: 'min-content' }}
      display="flex"
      alignItems="center"
    >
      {icon && (
        <Icon sz="xs" color={contrastColor} name={icon} op="opacity-4" />
      )}
      <Text color={contrastColor} op="opacity-4">
        {label}
      </Text>
    </Box>
  );
};
export default createRestyleComponent<TagProps, Theme>([], Tag);
