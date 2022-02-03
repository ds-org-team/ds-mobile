import { BoxProps } from '@shopify/restyle';
import { IconButtonProps } from 'react-native-vector-icons/Icon';
import { ITheme } from '../../themes/interface';

export type IconProps = {
  icon?: string;
  h?: Custom.HeightComponent;
  w?: Custom.HeightComponent;
} & IconButtonProps &
  Partial<BoxProps<ITheme>>;
