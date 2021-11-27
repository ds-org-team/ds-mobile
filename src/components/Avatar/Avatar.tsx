import { useTheme } from '@shopify/restyle';
import React from 'react';
import { Image } from 'react-native';
import { Box } from '..';
import { Theme } from '../..';
import { AvatarProps } from './interfaces';

const DIMENSIONS = { width: '100%', height: '100%' };

const Avatar: React.FC<AvatarProps> = ({ image }) => {
  const { borderRadii } = useTheme<Theme>();
  const style = { ...DIMENSIONS, borderRadius: borderRadii.circular };

  return (
    <Box sz="xl" borderRadius="circular">
      {image && <Image source={{ uri: image }} style={style} />}
    </Box>
  );
};

export default Avatar;
