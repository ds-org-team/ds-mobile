import { BoxProps } from '@shopify/restyle';
import { Theme } from '../../themes/institucional';

export type TagProps = {
  label: string;
  size: 'small' | 'medium';
  icon?: string;
  color?: Exclude<Custom.Colors, 'black' | 'white'>;
} & Partial<BoxProps<Theme>>;
