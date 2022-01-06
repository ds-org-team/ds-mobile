import { IconButtonProps } from 'react-native-vector-icons/Icon';
import { CustomBoxProps } from '../Box/interface';

export type IconProps = {
  icon?: string;
} & IconButtonProps &
  CustomBoxProps;
