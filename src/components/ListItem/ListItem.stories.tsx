import React from 'react';
import { withDesign } from 'storybook-addon-designs';
import Icon from '../Icon';
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
    icon: {
      control: {
        type: 'text',
      },
      defaultValue: 'account',
    },
    avatar: {
      control: {
        type: 'text',
      },
      defaultValue: 'https://picsum.photos/200',
    },
    text: {
      control: {
        type: 'text',
      },
    },
    tags: {
      control: {
        type: 'array',
      },
    },
  },
  decorators: [withDesign],
};

const urlHandoff =
  'https://www.figma.com/file/3raVfIADTUZCzFOOaQ9PMQ/HANDOFF-%7C-Core-Components-Mobile-%7C-Institucional?node-id=228%3A5457';

export const Primary = ({ tags, ...props }: ListItemProps): React.ReactNode => (
  <ListItem tags={tags && Object.values(tags)} {...props} />
);

Primary.parameters = {
  design: {
    type: 'figma',
    url: urlHandoff,
  },
};

export const WithInput = (props: ListItemProps): React.ReactNode => (
  <ListItem {...props}>
    <Icon name="arrow-right" style={{ transform: [{ scale: 1.5 }] }} />
  </ListItem>
);

export const WithTags = (props: ListItemProps): React.ReactNode => (
  <ListItem
    avatar="https://picsum.photos/200"
    tags={['obs', 'importante']}
    {...props}
  />
);
