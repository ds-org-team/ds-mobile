import React from 'react';
import { withDesign } from 'storybook-addon-designs';
import ListItem from './ListItem';

export default {
  title: 'Componente/ListItem',
  component: ListItem,
  argTypes: {
    title: {
      control: { type: 'text' },
      defaultValue: 'Item',
    },
    icon: {
      control: {
        type: 'text',
      },
      defaultValue: 'account',
    },
  },
  decorators: [withDesign],
};

const urlHandoff =
  'https://www.figma.com/file/3raVfIADTUZCzFOOaQ9PMQ/HANDOFF-%7C-Core-Components-Mobile-%7C-Institucional?node-id=228%3A5457';
interface ListItemProps {
  title: string;
  icon: string;
}

export const Primary = ({ title, icon }: ListItemProps): React.ReactNode =>
(
  <ListItem title={title} icon={icon} />
);

Primary.parameters = {
  design: {
    type: 'figma',
    url: urlHandoff,
  },
};
