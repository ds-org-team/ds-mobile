import { useTheme } from '@shopify/restyle';
import React from 'react';
import { Image } from 'react-native';
import Box from '../Box';
import { AvatarProps } from './interfaces';
import Text from '../Text';
import { ITheme } from '../../themes/interface';

const DIMENSIONS = { width: '100%', height: '100%' };

const Avatar: React.FC<AvatarProps> = ({ image, label, ...props }) => {
  const { borderRadii } = useTheme<ITheme>();
  const style = { ...DIMENSIONS, borderRadius: borderRadii.circular };
  const [fst, snd] = (label || '').split(' ');
  const initials = snd ? fst.replace(fst[1], snd) : fst;

  const [number] = ['one', 'two', 'tree', 'four', 'five'].sort(
    () => 0.5 - Math.random(),
  );

  return (
    <Box
      h="xs"
      w="xs"
      borderRadius="circular"
      alignItems="center"
      justifyContent="center"
      backgroundColor={`decorative-${number}-primary` as keyof ITheme['colors']}
      {...props}
    >
      {image && !label && <Image style={style} source={{ uri: image }} />}
      {label && !image && <Text>{initials.substring(0, 2).toUpperCase()}</Text>}
    </Box>
  );
};

export default Avatar;
