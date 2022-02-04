import { createTheme as createThemeShopify } from '@shopify/restyle';
import { ITheme, ITokens } from '../themes/interface';

type MapKeys = Map<string, string>;

function visit(level: any, parent: string, keys: MapKeys) {
  if (typeof level === 'object') {
    Object.keys(level).forEach((prop: string) => {
      visit(level[prop], `${parent}-${prop}`, keys);
    });

    return;
  }

  keys.set(parent, level);
}

function generateKeysPalette(colors: any): ITheme['colors'] {
  const keys = new Map();

  Object.keys(colors).forEach((level: string) => {
    visit(colors[level], level, keys);
  });

  return { ...Object.fromEntries(keys) };
}

function checkHasTokensNull(tokens: ITokens) {
  const { colors, spacing, screen, font, radius } = tokens;

  return !!colors && !!spacing && !!screen && !!font && !!radius;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function createTheme(tokens: ITokens) {
  const hasNull = checkHasTokensNull(tokens);

  if (!hasNull) {
    throw new Error('Missing required Fields');
  }

  const { colors, spacing, screen, font, radius } = tokens;

  const palette = generateKeysPalette(colors);

  const theme = createThemeShopify({
    colors: palette,
    spacing,
    breakpoints: screen.breakpoints,
    textVariants: font.variants,
    borderRadii: radius,
  });

  return theme;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function extendTheme(tokens: Partial<ITokens>, model: ITheme) {
  const { colors, spacing, screen, font, radius } = tokens;

  const palette = generateKeysPalette(colors);

  const usefulTokens = {
    colors: palette || model.colors,
    spacing: spacing || model.spacing,
    breakpoints: screen?.breakpoints || model.breakpoints,
    textVariants: font?.variants || model.textVariants,
    borderRadii: radius || model.borderRadii,
  };

  const theme = createThemeShopify(usefulTokens);

  return theme;
}

export { createTheme, extendTheme };
