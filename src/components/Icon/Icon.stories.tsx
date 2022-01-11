import React from 'react';
import Icon from './Icon';

export default {
  title: 'Elements/Icon',
  component: Icon,
  argTypes: {
    name: {
      control: {
        type: 'text',
      },
      defaultValue: 'account',
    },
  },
};

interface IconProps {
  name: string;
}

export const Default = ({ name }: IconProps): React.ReactNode => (
  <Icon name={name} />
);
