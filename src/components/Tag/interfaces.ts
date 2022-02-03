import { BoxProps } from '@shopify/restyle';
import { ITheme } from '../../themes/interface';

export type TagProps = {
  label: string;
  size: 'small' | 'medium';
  icon?: string;
  color?: keyof ITheme['colors'];
} & Partial<BoxProps<ITheme>>;
