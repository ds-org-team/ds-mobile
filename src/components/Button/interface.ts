import { ReactNode } from 'react';
import { BoxProps, TextProps } from '@shopify/restyle';
import { ITheme } from '../../themes/interface';

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'tertiary';
  disabled?: boolean;
  icon?: string;
  children?: ReactNode;
  onPress: () => void;
  loading?: boolean;
  textProps?: TextProps<ITheme>;
  bw?: Custom.BorderWidth;
  op?: Custom.Opacity;
  sof?: Custom.Shadow;
  sr?: Custom.Shadow;
  sop?: Custom.Shadow;
} & Partial<BoxProps<ITheme>>;

type ColorsOptions = {
  [index: string]: keyof ITheme['colors'];
};

type BorderWidthOptions = {
  [index: string]: Custom.BorderWidth;
};

export { ButtonProps, ColorsOptions, BorderWidthOptions };
