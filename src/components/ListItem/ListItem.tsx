import React from 'react';
import { ListItemProps } from './interfaces';
import Text from '../Text';
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
  <Box backgroundColor="transparent" {...props}>
    <Box py="xs" px="xs" flexDirection="row" alignItems="center">
      {avatar && <Avatar image={avatar} />}
      {icon && !avatar && <Icon h="xs" w="xs" name={icon} size={32} />}
      <Box ml="xs" flexDirection="column" justifyContent="center">
        <Text fs="md" fontWeight="500" color="neutral-darkest">
          {label}
        </Text>
        {text && (
          <Box>
            <Text fs="md" fontWeight="400" color="neutral-dark">
              {text}
            </Text>
          </Box>
        )}
        {tags && (
          <Box flexDirection="row" mt="quark">
            {tags.map((tag, i) => (
              <Box key={tag + i} mr="quark">
                <Tag
                  label={tag}
                  size="small"
                  backgroundColor="highlight-04-light"
                  color="feedback-success-dark"
                />
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
    <Box borderColor="neutral-light" borderBottomWidth={1} />
  </Box>
);

export default ListItem;
