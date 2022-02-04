import React from 'react';
import { StatusBar, View } from 'react-native';

import {
  Box,
  Text,
  Button,
  List,
  Checkbox,
  Switch,
} from '../../src/components';

const Lists: React.FC = () => (
  <View>
    <StatusBar />

    <Box
      padding="sm"
      flexDirection="column"
      justifyContent="space-between"
      backgroundColor="background-default"
      height="100%"
    >
      <Text mb="sm">Lists / ListItem</Text>

      <List
        data={[
          {
            title: 'Primeiro item',
            avatar: { label: 'PI' },
            text: 'Observação',
          },
          {
            title: 'Segundo item',
            avatar: { image: 'https://picsum.photos/300' },
            tags: ['aviso', 'detalhes'],
          },
          {
            title: 'Terceiro item',
            avatar: { image: 'https://picsum.photos/400' },
            text: 'Subtexto descritivo',
          },
          {
            title: 'Item com Icon',
            text: 'Subtexto descritivo',
            icon: 'account',
          },
          {
            title: 'Com checkbox item',
            avatar: { image: 'https://picsum.photos/777' },
            tags: ['checkbox', 'info'],
            rightComponent: <Checkbox value onChange={() => undefined} />,
          },
          {
            title: 'Com Switch item',
            icon: 'heart',
            tags: ['switch', 'value', 'make'],
            rightComponent: <Switch value={false} onChange={() => undefined} />,
          },
          {
            title: 'Com button item',
            avatar: { image: 'https://picsum.photos/74' },
            tags: ['switch', 'value', 'make'],
            rightComponent: (
              <Button variant="tertiary" onPress={() => undefined}>
                Button
              </Button>
            ),
          },
        ]}
      />
    </Box>
  </View>
);

export default Lists;
