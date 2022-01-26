import { ReactNode } from 'react';
import { ImageXorLabel } from '../Avatar/interfaces';

export type ListItemProps = {
  rightComponent?: ReactNode;
  title: string;
  text?: string;
  icon?: string;
  avatar?: ImageXorLabel;
  tags?: string[];
  bottomComponent?: ReactNode;
};
