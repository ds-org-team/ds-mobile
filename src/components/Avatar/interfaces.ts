import { ImageProps } from 'react-native';
import { CustomBoxProps } from '../Box/interface';

export type ImageXorLabel =
  | {
      image: string;
      label?: never;
    }
  | {
      image?: never;
      label: string;
    };

export type AvatarProps = ImageXorLabel & CustomBoxProps & Partial<ImageProps>;
