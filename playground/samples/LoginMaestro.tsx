import React, { useRef, useState } from 'react';
import { StatusBar, Image, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useTheme } from '@shopify/restyle';
import { Box, Text, Button, TextField, Switch } from '../../src/components';
import { InputRef } from '../../src/components/Input/interfaces';
import Eye from '../assets/icons/eye.svg';
import EyeOff from '../assets/icons/eye-off.svg';

import pathImg from '../../assets/client/icon.webp';
import { Theme } from '../../src/themes';

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
  const [showPassword, setShowPassword] = useState(false);
  const [rawCpf, setRawCpf] = useState('');

  const cpfFieldRef = useRef<InputRef>(null);
  const passwordRef = useRef<InputRef>(null);

  const { colors } = useTheme<Theme>();

  const handleSubmit = () => {
    setResult({
      cpf: rawCpf,
      password: passwordRef.current?.value || '',
    });
    return result;
  };

  const renderShowPasswordIcon = () => {
    if (showPassword) {
      return (
        <EyeOff
          onPress={() => setShowPassword(!showPassword)}
          fill={colors['neutral-dark']}
        />
      );
    }
    return (
      <Eye
        onPress={() => setShowPassword(!showPassword)}
        fill={colors['neutral-dark']}
      />
    );
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flex: 1, backgroundColor: 'white' }}
      keyboardShouldPersistTaps="handled"
    >
      <StatusBar />

      <ScrollView keyboardShouldPersistTaps="handled">
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
              onChangeText={(text, rawText) => {
                setRawCpf(rawText || '');
              }}
            />

            <TextField
              ref={passwordRef}
              label="Senha"
              variant="medium"
              placeholder="Digite sua senha"
              autoCapitalize="none"
              onSubmitEditing={handleSubmit}
              secureTextEntry={!showPassword}
              renderRightIcon={renderShowPasswordIcon}
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
