/* eslint-disable camelcase */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ThemeProvider } from './playground/hooks/theme';
import Forms from './playground/samples/Forms';
import Playground from './playground';
import LoginMaestro from './playground/samples/LoginMaestro';
import Buttons from './playground/samples/Buttons';
import Lists from './playground/samples/Lists';

const Stack = createNativeStackNavigator();

const App: React.FC = () => (
  <ThemeProvider>
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

export default App;
