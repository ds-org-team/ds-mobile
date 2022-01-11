import React from 'react';
import { COLORS } from '../../themes/tokens';
import { TagProps } from './interfaces';
import Tag from './Tag';

export default {
  title: 'Componente/Tag',
  component: Tag,
  argTypes: {
    label: {
      control: { type: 'text' },
      defaultValue: 'Label',
    },
    color: {
      control: { type: 'select', options: COLORS },
    },
    icon: {
      control: { type: 'text' },
      defaultValue: 'account',
    },
    size: {
      control: { type: 'select', options: ['small', 'medium'] },
      defaultValue: 'medium',
    },
  },
};

export const Default = (props: TagProps): React.ReactNode => <Tag {...props} />;
