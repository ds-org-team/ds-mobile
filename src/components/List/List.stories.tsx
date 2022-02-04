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
        title: 'Primeiro item',
        avatar: { image: 'https://picsum.photos/200' },
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
    ]}
  />
);
