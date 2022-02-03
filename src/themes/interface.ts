export type ITokens = {
  colors: {
    transparent: string;
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
        secondary: {
          enabled: string;
          disabled: string;
        };
        inverse: {
          enabled: string;
          disabled: string;
        };
      };
      border: {
        primary: {
          enabled: string;
          disabled: string;
        };
        inverse: {
          enabled: string;
          disabled: string;
        };
      };
      icon: {
        primary: {
          enabled: string;
          disabled: string;
        };
        inverse: {
          enabled: string;
          disabled: string;
        };
      };
      divider: string;
    };
    surface: {
      default: string;
      pressed: string;
      select: string;
      disabled: string;
      overlay: string;
    };
    action: {
      main: {
        primary: string;
        pressed: string;
      };
      confirm: {
        primary: string;
        pressed: string;
      };
      remove: {
        primary: string;
        pressed: string;
      };
      help: {
        primary: string;
        pressed: string;
      };
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
    decorative: {
      one: {
        primary: string;
        inverse: string;
      };
      two: {
        primary: string;
        inverse: string;
      };
      tree: {
        primary: string;
        inverse: string;
      };
      four: {
        primary: string;
        inverse: string;
      };
      five: {
        primary: string;
        inverse: string;
      };
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
    'action-confirm-pressed': string;
    'action-confirm-primary': string;
    'action-help-pressed': string;
    'action-help-primary': string;
    'action-main-pressed': string;
    'action-main-primary': string;
    'action-remove-pressed': string;
    'action-remove-primary': string;
    'background-brand': string;
    'background-default': string;
    'decorative-five-inverse': string;
    'decorative-five-primary': string;
    'decorative-four-inverse': string;
    'decorative-four-primary': string;
    'decorative-one-inverse': string;
    'decorative-one-primary': string;
    'decorative-tree-inverse': string;
    'decorative-tree-primary': string;
    'decorative-two-inverse': string;
    'decorative-two-primary': string;
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
    'fittings-border-inverse-disabled': string;
    'fittings-border-inverse-enabled': string;
    'fittings-border-primary-disabled': string;
    'fittings-border-primary-enabled': string;
    'fittings-divider': string;
    'fittings-icon-inverse-disabled': string;
    'fittings-icon-inverse-enabled': string;
    'fittings-icon-primary-disabled': string;
    'fittings-icon-primary-enabled': string;
    'fittings-text-inverse-disabled': string;
    'fittings-text-inverse-enabled': string;
    'fittings-text-primary-disabled': string;
    'fittings-text-primary-enabled': string;
    'fittings-text-secondary-disabled': string;
    'fittings-text-secondary-enabled': string;
    'surface-default': string;
    'surface-disabled': string;
    'surface-overlay': string;
    'surface-pressed': string;
    'surface-select': string;
    transparent: string;
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
