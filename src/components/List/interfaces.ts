import { FlatListProps } from 'react-native';
import { ListItemProps } from '../ListItem/interfaces';

export type ListProps = Omit<
  FlatListProps<ListItemProps>,
  'renderItem' | 'data' | 'children'
> & { data: ListItemProps[] };
