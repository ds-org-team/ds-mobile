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
      backgroundColor="white"
      height="100%"
    >
      <Text mb="sm">Lists / ListItem</Text>

      <List
        data={[
          {
            label: 'Primeiro item',
            avatar: 'https://picsum.photos/200',
            text: 'Observação',
          },
          {
            label: 'Segundo item',
            avatar: 'https://picsum.photos/300',
            tags: ['aviso', 'detalhes'],
          },
          {
            label: 'Terceiro item',
            avatar: 'https://picsum.photos/400',
            text: 'Subtexto descritivo',
          },
          {
            label: 'Item com Icon',
            text: 'Subtexto descritivo',
            icon: 'account',
          },
          {
            label: 'Com checkbox item',
            avatar: 'https://picsum.photos/777',
            tags: ['checkbox', 'info'],
            children: <Checkbox value onChange={() => undefined} />,
          },
          {
            label: 'Com Switch item',
            icon: 'heart',
            tags: ['switch', 'value', 'make'],
            children: <Switch value={false} onChange={() => undefined} />,
          },
          {
            label: 'Com button item',
            avatar: 'https://picsum.photos/74',
            tags: ['switch', 'value', 'make'],
            children: (
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
