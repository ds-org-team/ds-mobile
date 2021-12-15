import React from 'react';
import { Image, StatusBar } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import pathImg from '../../assets/client/icon.webp';
import { Box, Button, Text, Pressable } from '../../src/components';

const LoginMaestro: React.FC = () => (
  <KeyboardAwareScrollView
    contentContainerStyle={{ flex: 1, backgroundColor: 'white' }}
  >
    <StatusBar />

    <Box
      pt="sm"
      px="sm"
      flexDirection="column"
      justifyContent="center"
      flex={1}
    >
      <Pressable
        flexDirection="row"
        justifyContent="space-between"
        alignItems="baseline"
        bg="feedback-error-base"
      >
        <Box width={100} height={100} bg="black"></Box>
        <Box width={100} height={100} ml="md" bg="black"></Box>
      </Pressable>
      <Box mb="sm">
        <Image source={pathImg} style={{ width: 75, height: 75 }} />
      </Box>

      <Box>
        <Box flexDirection="row" mt="lg">
          <Button variant="secondary" mr="nano" onPress={() => undefined}>
            Primeiro acesso
          </Button>
          <Button variant="primary" onPress={() => undefined}>
            Entrar
          </Button>
        </Box>
      </Box>

      <Button variant="tertiary" onPress={() => undefined} my="xs">
        Esqueceu sua senha?
      </Button>

      <Box flexDirection="row" alignItems="center" justifyContent="center">
        <Text mr="nano">Usar impressão digital</Text>
      </Box>
      <Box alignItems="center" flexDirection="column" mt="lg">
        <Button variant="tertiary" onPress={() => undefined}>
          Ouvidoria
        </Button>
        <Box alignItems="center">
          <Text fs="sm" color="neutral-base">
            Maestro v2.1.65 | v255
          </Text>
        </Box>
      </Box>
    </Box>
  </KeyboardAwareScrollView>
);

export default LoginMaestro;
