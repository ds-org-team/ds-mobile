import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Box from '../Box';
import { ListItemProps } from './interfaces';
import Text from '../Text';

const ListItem: React.FC<ListItemProps> = ({ title, icon, ...props }) => (
  <Box />
);

export default ListItem;
