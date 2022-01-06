import React from 'react';
import Avatar from './Avatar';

export default {
  title: 'Elements/Avatar',
  component: Avatar,
  argTypes: {
    image: {
      control: {
        type: 'text',
      },
      defaultValue: 'https://picsum.photos/200',
    },
    label: {
      control: {
        type: 'text',
      },
      defaultValue: 'Nome Proprio',
    },
  },
};

export const Default = ({ label }: any): React.ReactNode => (
  <Avatar label={label} />
);

export const WithImage = ({ image }: any): React.ReactNode => (
  <Avatar image={image} />
);
