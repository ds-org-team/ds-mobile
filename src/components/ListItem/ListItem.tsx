import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createRestyleComponent } from '@shopify/restyle';
import Box from '../Box';
import { ListItemProps } from './interfaces';
import Text from '../Text';
import { Theme } from '../../themes';

const ListItem: React.FC<ListItemProps> = ({ title, icon, ...props }) => (
  <Box
    minHeight="nano"
    py="nano"
    px="nano"
    flexDirection="row"
    backgroundColor="neutral-dark"
    {...props}
  >
    <Box sz="xl" mr="nano" borderRadius="circular">
      {icon && <Icon name={icon} />}
    </Box>
    <Text fs="md">{title}</Text>
  </Box>
);

export default createRestyleComponent<ListItemProps, Theme>([], ListItem);
