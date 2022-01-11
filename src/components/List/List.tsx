import React from 'react';
import { FlatList } from 'react-native';
import ListItem from '../ListItem';
import { ListItemProps } from '../ListItem/interfaces';
import { ListProps } from './interfaces';

const List: React.FC<ListProps> = props => (
  <FlatList
    {...props}
    keyExtractor={(item, i) => item.label + i.toString()}
    renderItem={({ item }: { item: ListItemProps }) => <ListItem {...item} />}
  />
);

export default List;
