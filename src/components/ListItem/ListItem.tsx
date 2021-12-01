import React from 'react';
import { createRestyleComponent } from '@shopify/restyle';
import { ListItemProps } from './interfaces';
import Text from '../Text';
import { Theme } from '../../themes';
import Avatar from '../Avatar';
import Box from '../Box';
import Icon from '../Icon';
import Tag from '../Tag';

const ListItem: React.FC<ListItemProps> = ({
  label,
  icon,
  avatar,
  text,
  tags,
  children,
  ...props
}) => (
  <Box minHeight="nano" backgroundColor="transparent" {...props}>
    <Box py="xs" px="xs" flexDirection="row" alignItems="center">
      {avatar && <Avatar image={avatar} />}
      {icon && !avatar && <Icon name={icon} />}
      <Box ml="xs" flexDirection="column" justifyContent="center">
        <Box>
          <Text fs="md" fontWeight="500" lh="sm" color="neutral-darkest">
            {label}
          </Text>
        </Box>
        {text && (
          <Box>
            <Text fs="md" fontWeight="400" lh="sm" color="neutral-dark">
              {text}
            </Text>
          </Box>
        )}
        {tags && (
          <Box flexDirection="row" mt="quark">
            {tags.map(tag => (
              <Box mr="quark">
                <Tag label={tag} size="small" />
              </Box>
            ))}
          </Box>
        )}
      </Box>
      {children && (
        <Box position="absolute" right={0} mx="xs" alignItems="flex-end">
          {children}
        </Box>
      )}
    </Box>
    <Box borderColor="neutral-light" borderWidth={1} />
  </Box>
);

export default createRestyleComponent<ListItemProps, Theme>([], ListItem);
