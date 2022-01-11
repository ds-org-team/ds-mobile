import React from 'react';
import List from './List';

export default {
  title: 'Componente/List',
  component: List,
};

export const Default = (): React.ReactNode => (
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
    ]}
  />
);
