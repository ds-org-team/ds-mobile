import { useTheme } from '@shopify/restyle';
import React from 'react';
import { Image } from 'react-native';
import Box from '../Box';
import { Theme } from '../../themes';
import { AvatarProps } from './interfaces';
import Text from '../Text';

const DIMENSIONS = { width: '100%', height: '100%' };

const Avatar: React.FC<AvatarProps> = ({ image, label, ...props }) => {
  const { borderRadii, colors } = useTheme<Theme>();
  const style = { ...DIMENSIONS, borderRadius: borderRadii.circular };
  const [fst, snd] = (label || '').split(' ');
  const initials = snd ? fst.replace(fst[1], snd) : fst;
  const [color] = Object.keys(colors)
    .filter(c => c.includes('-light'))
    .sort(() => 0.5 - Math.random());

  return (
    <Box
      sz="xl"
      borderRadius="circular"
      alignItems="center"
      justifyContent="center"
      {...props}
      backgroundColor={color as Custom.Colors}
    >
      {image && !label && (
        <Image style={style} {...props} source={{ uri: image }} />
      )}
      {label && !image && <Text>{initials.substring(0, 2).toUpperCase()}</Text>}
    </Box>
  );
};

export default Avatar;
