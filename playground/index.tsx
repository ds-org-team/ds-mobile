import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Text, Box, Button } from '../src/components';

interface PlaygroundProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigation: any;
}

const Playground: React.FC<PlaygroundProps> = ({ navigation }) => {
  const [selectTheme, setSelectTheme] = useState(null);

  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <Box m="sm">
        <Text fs="4xl">
          Bem-vindo ao
          <Text fontWeight="bold"> Catálogo </Text>
          do DS-Mobile 🏗️
        </Text>

        <Box
          backgroundColor="neutral-lightest"
          borderColor="black"
          borderWidth={1}
          borderRadius="nano"
          mt="sm"
        >
          <RNPickerSelect
            onValueChange={value => setSelectTheme(value)}
            items={[
              { label: 'Institucional', value: 'Institucional' },
              { label: 'Maestro light', value: 'Maestro light' },
              { label: 'Maestro Dark', value: 'Maestro Dark' },
              { label: 'Armazzem', value: 'Armazzem' },
            ]}
          >
            <Text m="nano" fs="lg" color="neutral-dark">
              {selectTheme
                ? `Você está com o tema: ${selectTheme}`
                : 'Escolha um tema'}
            </Text>
          </RNPickerSelect>
        </Box>

        <Box mt="lg">
          <Button mt="sm" onPress={() => navigation.navigate('Forms')}>
            Formulários
          </Button>

          <Button mt="sm" onPress={() => navigation.navigate('Lists')}>
            Listas
          </Button>

          <Button mt="sm" onPress={() => navigation.navigate('Buttons')}>
            Botões
          </Button>

          <Button mt="sm" onPress={() => navigation.navigate('LoginMaestro')}>
            Login Maestro
          </Button>
        </Box>
      </Box>
    </ScrollView>
  );
};

export default Playground;
