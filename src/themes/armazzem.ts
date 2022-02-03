import { createTheme } from '../utils/createTheme';
import { ITokens } from './interface';

const tokens: ITokens = {
  colors: {
    transparent: 'transparent',
    background: {
      default: '#FFFFFF',
      brand: '#B68500',
    },
    fittings: {
      text: {
        primary: {
          enabled: '#1A233D',
          disabled: '#8F96A8',
        },
        secondary: {
          enabled: '#58627F',
          disabled: '#DADDE5',
        },
        inverse: {
          enabled: '#FFFFFF',
          disabled: '#8F96A8',
        },
      },
      border: {
        primary: {
          enabled: '#58627F',
          disabled: '#DADDE5',
        },
        inverse: {
          enabled: '#FFFFFF',
          disabled: '#8F96A8',
        },
      },
      icon: {
        primary: {
          enabled: '#58627F',
          disabled: '#DADDE5',
        },
        inverse: {
          enabled: '#FFFFFF',
          disabled: '#8F96A8',
        },
      },
      divider: '#BDBDBD',
    },
    surface: {
      default: '#FFFFFF',
      pressed: '#D1E3FE',
      select: '#E7F0FE',
      disabled: '#F0F2FA',
      overlay: '#58627F',
    },
    action: {
      main: {
        primary: '#B68500',
        pressed: '#795300',
      },
      confirm: {
        primary: '#15AB51',
        pressed: '#066347',
      },
      remove: {
        primary: '#D63429',
        pressed: '#7C0D21',
      },
      help: {
        primary: '#5487F9',
        pressed: '#0A7E19',
      },
    },
    feedback: {
      positive: {
        fill: '#CEFACE',
        border: '#15AB51',
        icon: '#15AB51',
        text: '#15AB51',
      },
      negative: {
        fill: '#FCE4D4',
        border: '#D63429',
        icon: '#D63429',
        text: '#D63429',
      },
      notice: {
        fill: '#FFEECE',
        border: '#FF780E',
        icon: '#FF780E',
        text: '#FF780E',
      },
      informative: {
        fill: '#0A7E19',
        border: '#0A7E19',
        icon: '#0A7E19',
        text: '#0A7E19',
      },
    },
    accent: {
      fill: '#0A7E19',
      border: '#0A7E19',
      icon: '#0A7E19',
      text: '#0A7E19',
    },
    decorative: {
      one: {
        primary: '#FEF8CB',
        inverse: '#795300',
      },
      two: {
        primary: '#FFE3EF',
        inverse: '#65167A',
      },
      tree: {
        primary: '#F9E0FF',
        inverse: '#38137A',
      },
      four: {
        primary: '#E1FDF9',
        inverse: '#13436D',
      },
      five: {
        primary: '#F4FCCF',
        inverse: '#396504',
      },
    },
  },
  spacing: {
    quark: 4,
    nano: 8,
    xs: 16,
    sm: 24,
    md: 32,
    lg: 40,
  },
  screen: {
    breakpoints: {
      phone: 0,
      tablet: 768,
    },
  },
  font: {
    variants: {
      bold: {
        fontFamily: '"Public Sans", sans-serif',
        fontWeight: '700',
      },
      semibold: {
        fontFamily: '"Public Sans", sans-serif',
        fontWeight: '600',
      },
      medium: {
        fontFamily: '"Public Sans", sans-serif',
        fontWeight: '500',
      },
      regular: {
        fontFamily: '"Public Sans", sans-serif',
        fontWeight: '400',
      },
    },
  },
  radius: {
    none: 0,
    nano: 4,
    sm: 8,
    md: 16,
    lg: 24,
    pill: 500,
    circular: 9999,
  },
};

const theme = createTheme(tokens);

export default theme;
