import React from 'react';
import { FlatList } from 'react-native';
import ListItem from '../ListItem';
import { ListItemProps } from '../ListItem/interfaces';
import { ListProps } from './interfaces';

// eslint-disable-next-line react/prop-types
const List: React.FC<ListProps> = ({ inverse, ...props }: ListProps) => (
  <FlatList
    {...props}
    keyExtractor={(item, i) => item.title + i.toString()}
    renderItem={({ item }: { item: ListItemProps }) => (
      <ListItem inverse={inverse} {...item} />
    )}
  />
);

export default List;
