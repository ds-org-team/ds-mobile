/* eslint-disable camelcase */
import React, { createContext, useContext, useState } from 'react';
import { Text } from 'react-native';

import { ThemeProvider as ThemeProviderShopify } from '@shopify/restyle';

import {
  useFonts,
  PublicSans_400Regular,
  PublicSans_500Medium,
  PublicSans_600SemiBold,
  PublicSans_700Bold,
} from '@expo-google-fonts/public-sans';

import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter';

import coral from '../../src/themes/institucional';
import armazzem from '../../src/themes/armazzem';
import maestroLight from '../../src/themes/maestro_light';
import maestroDark from '../../src/themes/maestro_dark';
import { ITheme } from '../../src';

interface ThemeContextData {
  setNewTheme: (value: string) => void;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<ITheme>(null as never);

  const [fontsLoaded] = useFonts({
    regularPublicSans: PublicSans_400Regular,
    mediumPublicSans: PublicSans_500Medium,
    semiboldPublicSans: PublicSans_600SemiBold,
    boldPublicSans: PublicSans_700Bold,
    regularInter: Inter_400Regular,
    mediumInter: Inter_500Medium,
    semiboldInter: Inter_600SemiBold,
    boldInter: Inter_700Bold,
  });

  const coralWithFont: ITheme = {
    ...coral,
    textVariants: {
      bold: {
        fontFamily: 'boldPublicSans',
        fontWeight: '700',
      },
      semibold: {
        fontFamily: 'semiboldPublicSans',
        fontWeight: '600',
      },
      medium: {
        fontFamily: 'mediumPublicSans',
        fontWeight: '500',
      },
      regular: {
        fontFamily: 'regularPublicSans',
        fontWeight: '400',
      },
    },
  };

  const armazzemWithFont: ITheme = {
    ...armazzem,
    textVariants: {
      bold: {
        fontFamily: 'boldInter',
        fontWeight: '700',
      },
      semibold: {
        fontFamily: 'semiboldInter',
        fontWeight: '600',
      },
      medium: {
        fontFamily: 'mediumInter',
        fontWeight: '500',
      },
      regular: {
        fontFamily: 'regularInter',
        fontWeight: '400',
      },
    },
  };

  const maestroLightWithFont: ITheme = {
    ...maestroLight,
    textVariants: {
      bold: {
        fontFamily: 'boldInter',
        fontWeight: '700',
      },
      semibold: {
        fontFamily: 'semiboldInter',
        fontWeight: '600',
      },
      medium: {
        fontFamily: 'mediumInter',
        fontWeight: '500',
      },
      regular: {
        fontFamily: 'regularInter',
        fontWeight: '400',
      },
    },
  };

  const maestroDarkWithFont: ITheme = {
    ...maestroDark,
    textVariants: {
      bold: {
        fontFamily: 'boldInter',
        fontWeight: '700',
      },
      semibold: {
        fontFamily: 'semiboldInter',
        fontWeight: '600',
      },
      medium: {
        fontFamily: 'mediumInter',
        fontWeight: '500',
      },
      regular: {
        fontFamily: 'regularInter',
        fontWeight: '400',
      },
    },
  };

  const setNewTheme = (value: string) => {
    switch (value) {
      case 'Armazzem':
        setTheme(armazzemWithFont);
        break;
      case 'Maestro light':
        setTheme(maestroLightWithFont);
        break;
      case 'Maestro Dark':
        setTheme(maestroDarkWithFont);
        break;
      default:
        setTheme(coralWithFont);
        break;
    }
  };

  if (fontsLoaded) {
    return (
      <ThemeContext.Provider value={{ setNewTheme }}>
        <ThemeProviderShopify theme={theme || coralWithFont}>
          {children}
        </ThemeProviderShopify>
      </ThemeContext.Provider>
    );
  }

  return <Text>Algum problema ocorreu no carregamento da fonte</Text>;
};

const useTheme = (): ThemeContextData => {
  const context = useContext(ThemeContext);

  if (!context) throw new Error('useTheme must be used in auth context.');

  return context;
};

export { ThemeProvider, useTheme };
