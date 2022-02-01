import { createTheme as createThemeShopify, BaseTheme } from '@shopify/restyle';

type MapKeys = Map<string, string>;

type IReturnKeys = {
  [index: string]: string;
};

function visit(level: any, parent: string, keys: MapKeys) {
  if (typeof level === 'object') {
    Object.keys(level).forEach((prop: string) => {
      visit(level[prop], `${parent}-${prop}`, keys);
    });

    return;
  }

  keys.set(parent, level);
}

function generateKeysPalette(colors: any) {
  const keys = new Map();

  Object.keys(colors).forEach((level: string) => {
    visit(colors[level], level, keys);
  });

  return { ...Object.fromEntries(keys) };
}

function checkHasTokensNull(tokens: any) {
  const {
    colors,
    spacing,
    sizing,
    screen,
    font,
    radius,
    opacity,
    shadows,
    border,
  } = tokens;

  return (
    !!colors &&
    !!spacing &&
    !!sizing &&
    !!screen &&
    !!font &&
    !!radius &&
    !!opacity &&
    !!shadows &&
    !!border
  );
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function createTheme(tokens: any) {
  const hasNull = checkHasTokensNull(tokens);

  if (!hasNull) {
    throw new Error('Missing required Fields');
  }

  const {
    colors,
    spacing,
    sizing,
    screen,
    font,
    radius,
    opacity,
    shadows,
    border,
  } = tokens;

  // const palette = generateKeysPalette(colors);

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

export { createTheme };
