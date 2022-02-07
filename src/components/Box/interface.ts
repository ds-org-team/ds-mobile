import { BoxProps } from '@shopify/restyle';
import { ReactNode } from 'react';
import { ViewStyle } from 'react-native';
import { ITheme } from '../../themes/interface';

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
  w: Custom.HeightComponent;
  style: ViewStyle;
  testID: string;
}> &
  Partial<BoxProps<ITheme>>;

export { CustomBoxProps };
