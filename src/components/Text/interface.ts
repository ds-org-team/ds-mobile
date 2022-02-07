import { TextProps } from '@shopify/restyle';
import { ReactNode } from 'react';
import { ITheme } from '../../themes/interface';

type CustomTextProps = Partial<{
  children?: ReactNode;
  fs?: Custom.FontSize;
  lh?: Custom.LineHeight;
  ls?: Custom.LetterSpacing;
  testID?: string;
}> &
  Partial<TextProps<ITheme>>;

export { CustomTextProps };
