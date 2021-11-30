import React from 'react';
import { withDesign } from 'storybook-addon-designs';
import { Icon } from '..';
import { ListItemProps } from './interfaces';
import ListItem from './ListItem';

export default {
  title: 'Componente/ListItem',
  component: ListItem,
  argTypes: {
    label: {
      control: { type: 'text' },
      defaultValue: 'Este é um item',
    },
    text: {
      control: {
        type: 'text',
      },
    },
    icon: {
      control: {
        type: 'text',
      },
    },
    avatar: {
      control: {
        type: 'text',
      },
    },
  },
  decorators: [withDesign],
};

const urlHandoff =
  'https://www.figma.com/file/3raVfIADTUZCzFOOaQ9PMQ/HANDOFF-%7C-Core-Components-Mobile-%7C-Institucional?node-id=228%3A5457';

export const Default = (props: ListItemProps): React.ReactNode => (
  <ListItem {...props} />
);

Default.parameters = {
  design: {
    type: 'figma',
    url: urlHandoff,
  },
};

export const WithIcon = (props: ListItemProps): React.ReactNode => (
  <ListItem icon="account" {...props} />
);

export const WithAvatar = (props: ListItemProps): React.ReactNode => (
  <ListItem avatar="https://picsum.photos/200" {...props} />
);

export const WithInput = (props: ListItemProps): React.ReactNode => (
  <ListItem {...props}>
    <Icon name="arrow-right" style={{ transform: [{ scale: 1.5 }] }} />
  </ListItem>
);
