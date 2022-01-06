import { BoxProps } from '@shopify/restyle';
import { ReactNode } from 'react';
import { Theme } from '../../themes/institucional';

export type ListItemProps = {
  children?: ReactNode;
  label: string;
  text?: string;
  icon?: string;
  avatar?: string;
  tags?: string[];
} & Partial<BoxProps<Theme>>;
