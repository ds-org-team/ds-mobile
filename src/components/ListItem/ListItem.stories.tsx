import React from 'react';
import { storiesOf } from '@storybook/react-native';
import ListItem from './ListItem';

export default {
  title: 'Componente/ListItem',
  component: ListItem,
};

// Stories
export const BasicListItem = (): React.ReactNode => <ListItem />;

// Add all stories to RN/Expo storybook
storiesOf('ListItem', module).add('Basic', BasicListItem);
