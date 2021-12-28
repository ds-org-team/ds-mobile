import { ReactNode } from 'react';
import { BoxProps } from '@shopify/restyle';
import { Theme } from '../../themes/institucional';

type CustomBoxProps = Partial<{
  children: ReactNode;
  br: Custom.BorderRadius;
  bw: Custom.BorderWidth;
  bbw: Custom.BorderWidth;
  btw: Custom.BorderWidth;
  blw: Custom.BorderWidth;
  brw: Custom.BorderWidth;
  op: Custom.Opacity;
  sof: Custom.Shadow;
  sr: Custom.Shadow;
  sop: Custom.Shadow;
  h: Custom.HeightComponent;
  sz?: Custom.Size;
  style: ViewStyle;
  testID: string;
}> &
  Partial<BoxProps<Theme>>;

export { CustomBoxProps };
