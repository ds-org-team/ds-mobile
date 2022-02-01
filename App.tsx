/* eslint-disable camelcase */
import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  useFonts,
  PublicSans_400Regular,
  PublicSans_500Medium,
  PublicSans_600SemiBold,
  PublicSans_700Bold,
} from '@expo-google-fonts/public-sans';

import { themeCoral, themeInstitucional, ThemeProvider } from './src/themes';
import Forms from './playground/samples/Forms';
import Playground from './playground';
import LoginMaestro from './playground/samples/LoginMaestro';
import Buttons from './playground/samples/Buttons';
import Lists from './playground/samples/Lists';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    regular: PublicSans_400Regular,
    medium: PublicSans_500Medium,
    semibold: PublicSans_600SemiBold,
    bold: PublicSans_700Bold,
  });

  const themeWithFont = {
    ...themeCoral,
    textVariants: {
      bold: {
        fontFamily: 'bold',
      },
      semibold: {
        fontFamily: 'semibold',
      },
      medium: {
        fontFamily: 'medium',
      },
      regular: {
        fontFamily: 'regular',
      },
    },
  };

  if (fontsLoaded) {
    return (
      <ThemeProvider theme={themeWithFont}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Playground"
            screenOptions={{ animation: 'slide_from_right' }}
          >
            <Stack.Screen
              name="Playground"
              component={Playground}
              options={{ title: 'Tela de boas vindas' }}
            />
            <Stack.Screen
              name="Forms"
              component={Forms}
              options={{ title: 'Formulários' }}
            />
            <Stack.Screen
              name="Buttons"
              component={Buttons}
              options={{ title: 'Botões' }}
            />
            <Stack.Screen
              name="Lists"
              component={Lists}
              options={{ title: 'Lista' }}
            />
            <Stack.Screen name="LoginMaestro" component={LoginMaestro} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    );
  }

  return <Text>Algum problema ocorreu no carregamento da fonte</Text>;
};

export default App;
