export type ITokens = {
  colors: {
    background: {
      default: string;
      brand: string;
    };
    fittings: {
      text: {
        primary: {
          enabled: string;
          disabled: string;
        };
      };
    };
    surface: {
      default: string;
      pressed: string;
      select: string;
    };
    action: {
      primary: string;
      'primary-pressed': string;
      confirm: string;
      'confirm-pressed': string;
      remove: string;
      'remove-pressed': string;
      help: string;
      'help-pressed': string;
    };
    feedback: {
      positive: {
        fill: string;
        border: string;
        icon: string;
        text: string;
      };
      negative: {
        fill: string;
        border: string;
        icon: string;
        text: string;
      };
      notice: {
        fill: string;
        border: string;
        icon: string;
        text: string;
      };
      informative: {
        fill: string;
        border: string;
        icon: string;
        text: string;
      };
    };
    accent: {
      fill: string;
      border: string;
      icon: string;
      text: string;
    };
    black: string;
    white: string;
    neutral: {
      lightest: string;
      dark: string;
    };
  };
  spacing: {
    quark: number;
    nano: number;
    xs: number;
    sm: number;
    md: number;
    lg: number;
  };
  sizing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  screen: {
    breakpoints: {
      phone: number;
      tablet: number;
    };
  };
  font: {
    variants: {
      bold: {
        fontFamily: string;
        fontWeight: string;
      };
      semibold: {
        fontFamily: string;
        fontWeight: string;
      };
      medium: {
        fontFamily: string;
        fontWeight: string;
      };
      regular: {
        fontFamily: string;
        fontWeight: string;
      };
    };
    'line-height': {
      lg: number;
      md: number;
      sm: number;
      xs: number;
    };
    'letter-spacing': {
      lg: number;
      md: number;
      sm: number;
      xs: number;
    };
    size: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };
  };
  radius: {
    none: number;
    nano: number;
    sm: number;
    md: number;
    lg: number;
    pill: number;
    circular: number;
  };
  opacity: {
    'opacity-80': number;
    'opacity-64': number;
    'opacity-32': number;
    'opacity-16': number;
    'opacity-08': number;
  };
  shadows: {
    offset: {
      xs: { width: number; height: number };
      sm: { width: number; height: number };
      md: { width: number; height: number };
      lg: { width: number; height: number };
    };
    radius: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
    };
    opacity: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
    };
  };
  border: {
    width: {
      none: number;
      xs: number;
      sm: number;
      md: number;
      lg: number;
    };
    radius: {
      none: number;
      nano: number;
      sm: number;
      md: number;
      lg: number;
      pill: number;
      circular: number;
    };
  };
};

export type ITheme = {
  borderRadii: {
    circular: number;
    lg: number;
    md: number;
    nano: number;
    none: number;
    pill: number;
    sm: number;
  };
  breakpoints: {
    phone: number;
    tablet: number;
  };
  colors: {
    'accent-border': string;
    'accent-fill': string;
    'accent-icon': string;
    'accent-text': string;
    'action-confirm': string;
    'action-confirm-pressed': string;
    'action-help': string;
    'action-help-pressed': string;
    'action-primary': string;
    'action-primary-pressed': string;
    'action-remove': string;
    'action-remove-pressed': string;
    'background-brand': string;
    'background-default': string;
    'feedback-informative-border': string;
    'feedback-informative-fill': string;
    'feedback-informative-icon': string;
    'feedback-informative-text': string;
    'feedback-negative-border': string;
    'feedback-negative-fill': string;
    'feedback-negative-icon': string;
    'feedback-negative-text': string;
    'feedback-notice-border': string;
    'feedback-notice-fill': string;
    'feedback-notice-icon': string;
    'feedback-notice-text': string;
    'feedback-positive-border': string;
    'feedback-positive-fill': string;
    'feedback-positive-icon': string;
    'feedback-positive-text': string;
    'fittings-text-primary-disabled': string;
    'fittings-text-primary-enabled': string;
    'surface-default': string;
    'surface-pressed': string;
    'surface-select': string;
  };
  spacing: {
    lg: number;
    md: number;
    nano: number;
    quark: number;
    sm: number;
    xs: number;
  };
  textVariants: {
    bold: {
      fontFamily: string;
      fontWeight: number;
    };
    medium: {
      fontFamily: string;
      fontWeight: number;
    };
    regular: {
      fontFamily: string;
      fontWeight: number;
    };
    semibold: {
      fontFamily: string;
      fontWeight: number;
    };
  };
};
