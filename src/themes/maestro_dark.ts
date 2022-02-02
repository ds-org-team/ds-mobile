import { createTheme } from '../utils/theme';

const tokens = {
  colors: {
    background: {
      default: '#0C1224',
      brand: '#1D5AF5',
    },
    fittings: {
      text: {
        primary: {
          enabled: '#DADDE5',
          disabled: '#58627F',
        },
      },
    },
    surface: {
      default: '#FFFFFF',
      pressed: '#D1E3FE',
      select: '#E7F0FE',
    },
    action: {
      primary: '#5487F9',
      'primary-pressed': '#5487F9',
      confirm: '#15AB51',
      'confirm-pressed': '#15AB51',
      remove: '#D63429',
      'remove-pressed': '#D63429',
      help: '#1D5AF5',
      'help-pressed': '#1D5AF5',
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
        fill: '#D1E3FE',
        border: '#1D5AF5',
        icon: '#1D5AF5',
        text: '#1D5AF5',
      },
    },
    accent: {
      fill: '#1D5AF5',
      border: '#1D5AF5',
      icon: '#1D5AF5',
      text: '#1D5AF5',
    },
    black: '#000',
    white: '#fff',
    neutral: {
      lightest: '#fff',
      dark: '#212121',
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
  sizing: {
    xs: 16,
    sm: 20,
    md: 24,
    lg: 32,
    xl: 48,
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
    'line-height': {
      lg: 32,
      md: 25.6,
      sm: 19.2,
      xs: 16,
    },
    'letter-spacing': {
      lg: 1.5,
      md: 0.5,
      sm: 0,
      xs: -1.5,
    },
    size: {
      xs: 16,
      sm: 20,
      md: 24,
      lg: 32,
      xl: 48,
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
  opacity: {
    'opacity-80': 0.8,
    'opacity-64': 0.64,
    'opacity-32': 0.32,
    'opacity-16': 0.16,
    'opacity-08': 0.08,
  },
  shadows: {
    offset: {
      xs: { width: 0, height: 1.5 },
      sm: { width: 0, height: 4 },
      md: { width: 0, height: 10 },
      lg: { width: 0, height: 16 },
    },
    radius: {
      xs: 3.5,
      sm: 8,
      md: 16,
      lg: 32,
    },
    opacity: {
      xs: 0.12,
      sm: 0.1,
      md: 0.1,
      lg: 0.1,
    },
  },
  border: {
    width: {
      none: 0,
      xs: 1,
      sm: 2,
      md: 4,
      lg: 8,
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
  },
};

const theme = createTheme(tokens);

export default theme;
