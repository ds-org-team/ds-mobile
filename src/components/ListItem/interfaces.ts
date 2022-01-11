import { ReactNode } from 'react';

export type ListItemProps = {
  children?: ReactNode;
  label: string;
  text?: string;
  icon?: string;
  avatar?: string;
  tags?: string[];
};
