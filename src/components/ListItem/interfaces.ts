import { BoxProps } from '@shopify/restyle';
import { ReactNode } from 'react';
import { Theme } from '../../themes/institucional';

export type ListItemProps = {
  children: ReactNode;
  title: string;
  icon: string;
} & Partial<BoxProps<Theme>>;
