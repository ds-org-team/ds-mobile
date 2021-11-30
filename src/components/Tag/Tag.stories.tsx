import React from 'react';
import { COLORS } from '../../themes/tokens';
import { TagProps } from './interfaces';
import Tag from './Tag';

export default {
  title: 'Componente/ListItem',
  component: Tag,
  argTypes: {
    label: {
      control: { type: 'text' },
      defaultValue: 'Este é um item',
    },
    color: {
      control: { type: 'select', options: COLORS },
    },
  },
};

export const Default = (props: TagProps): React.ReactNode => <Tag {...props} />;
