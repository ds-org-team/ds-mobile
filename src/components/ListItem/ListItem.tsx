import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Box from '../Box';
import { ListItemProps } from './interfaces';
import Text from '../Text';

const ListItem: React.FC<ListItemProps> = ({ title, icon, ...props }) => (
  <Box
    minHeight="nano"
    backgroundColor="neutral-dark"
    flexDirection="row"
    {...props}
    py="nano"
    px="nano"
  >
    <Box mr="nano" borderRadius="circular">
      {icon && <Icon name={icon} size={16} />}
    </Box>
    <Text fs="md">{title}</Text>
  </Box>
);

export default ListItem;
