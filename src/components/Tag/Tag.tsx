import React from 'react';
import { createRestyleComponent } from '@shopify/restyle';
import Text from '../Text';
import Box from '../Box';
import { TagProps } from './interfaces';
import { Theme } from '../../themes';

const Tag: React.FC<TagProps> = ({ label, color }) => (
  <Box borderColor={color || 'neutral-light'}>
    <Text color="neutral-darkest" opacity={0.8}>
      {label}
    </Text>
  </Box>
);

export default createRestyleComponent<TagProps, Theme>([], Tag);
