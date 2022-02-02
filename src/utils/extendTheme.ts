import { createTheme as createThemeShopify } from '@shopify/restyle';
import { ITokens } from '../themes/interface';
import { generateKeysPalette } from './createTheme';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function extendTheme(tokens: ITokens) {
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

export { extendTheme };
