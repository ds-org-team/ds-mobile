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
  },
};

interface AvatarProps {
  image: string;
}

export const Default = ({ image }: AvatarProps): React.ReactNode => (
  <Avatar image={image} />
);
