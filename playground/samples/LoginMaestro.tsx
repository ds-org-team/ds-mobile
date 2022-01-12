import React, { useRef, useState } from 'react';
import { StatusBar, Image, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Box, Text, Button, TextField, Switch } from '../../src/components';
import { InputRef } from '../../src/components/Input/interfaces';

import pathImg from '../../assets/client/icon.webp';

type ResultType = {
  cpf: string;
  password: string;
};

const LoginMaestro: React.FC = () => {
  const [checked, setChecked] = useState(true);

  const [result, setResult] = useState<ResultType>({
    cpf: '',
    password: '',
  });

  const cpfFieldRef = useRef<InputRef>(null);
  const passwordRef = useRef<InputRef>(null);

  const handleSubmit = () => {
    setResult({
      cpf: cpfFieldRef.current?.value || '',
      password: passwordRef.current?.value || '',
    });
    return result;
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flex: 1, backgroundColor: 'white' }}
    >
      <StatusBar />

      <ScrollView>
        <Box
          pt="sm"
          px="sm"
          flexDirection="column"
          justifyContent="center"
          flex={1}
        >
          <Box mb="sm">
            <Image source={pathImg} style={{ width: 75, height: 75 }} />
          </Box>

          <Box>
            <TextField
              ref={cpfFieldRef}
              type="cpf"
              label="CPF"
              variant="medium"
              placeholder="000.000.000-00"
              autoCapitalize="none"
              keyboardType="numeric"
              onSubmitEditing={() => {
                passwordRef.current?.focus?.();
              }}
            />

            <TextField
              ref={passwordRef}
              label="Senha"
              variant="medium"
              placeholder="Digite sua senha"
              autoCapitalize="none"
              onSubmitEditing={handleSubmit}
              secureTextEntry
            />

            <Box flexDirection="row" mt="lg">
              <Button variant="secondary" mr="nano" onPress={() => undefined}>
                Primeiro acesso
              </Button>
              <Button variant="primary" onPress={handleSubmit}>
                Entrar
              </Button>
            </Box>
          </Box>

          <Button variant="tertiary" onPress={() => undefined} my="xs">
            Esqueceu sua senha?
          </Button>

          <Box flexDirection="row" alignItems="center" justifyContent="center">
            <Text mr="nano">Usar impressão digital</Text>
            <Switch value={checked} onChange={() => setChecked(!checked)} />
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
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};

export default LoginMaestro;
