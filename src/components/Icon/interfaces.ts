import { BoxProps } from '@shopify/restyle';
import { IconButtonProps } from 'react-native-vector-icons/Icon';
import { Theme } from '../../themes/institucional';

export type IconProps = {
  icon?: string;
  h?: Custom.HeightComponent;
  w?: Custom.HeightComponent;
} & IconButtonProps &
  Partial<BoxProps<Theme>>;
