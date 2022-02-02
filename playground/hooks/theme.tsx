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

import coral from '../../src/themes/coral';
import armazzem from '../../src/themes/armazzem';
import maestroLight from '../../src/themes/maestro_light';
import maestroDark from '../../src/themes/maestro_dark';

interface ThemeContextData {
  setNewTheme: (value: string) => void;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<any>(null);

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

  const coralWithFont = {
    ...coral,
    textVariants: {
      bold: {
        fontFamily: 'boldPublicSans',
      },
      semibold: {
        fontFamily: 'semiboldPublicSans',
      },
      medium: {
        fontFamily: 'mediumPublicSans',
      },
      regular: {
        fontFamily: 'regularPublicSans',
      },
    },
  };

  const armazzemWithFont = {
    ...armazzem,
    textVariants: {
      bold: {
        fontFamily: 'boldInter',
      },
      semibold: {
        fontFamily: 'semiboldInter',
      },
      medium: {
        fontFamily: 'mediumInter',
      },
      regular: {
        fontFamily: 'regularInter',
      },
    },
  };

  const maestroLightWithFont = {
    ...maestroLight,
    textVariants: {
      bold: {
        fontFamily: 'boldInter',
      },
      semibold: {
        fontFamily: 'semiboldInter',
      },
      medium: {
        fontFamily: 'mediumInter',
      },
      regular: {
        fontFamily: 'regularInter',
      },
    },
  };

  const maestroDarkWithFont = {
    ...maestroDark,
    textVariants: {
      bold: {
        fontFamily: 'boldInter',
      },
      semibold: {
        fontFamily: 'semiboldInter',
      },
      medium: {
        fontFamily: 'mediumInter',
      },
      regular: {
        fontFamily: 'regularInter',
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
