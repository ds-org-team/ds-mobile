import { ImageProps } from 'react-native';
import { CustomBoxProps } from '../Box/interface';

export type AvatarProps = {
  image?: string;
} & CustomBoxProps &
  Partial<ImageProps>;
