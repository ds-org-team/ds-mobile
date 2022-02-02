import { createBox, createRestyleComponent } from '@shopify/restyle';
import React from 'react';
import {
  borderRadius,
  borderWidth,
  borderBottomWidth,
  borderTopWidth,
  borderLeftWidth,
  borderRightWidth,
  opacity,
  shadowOffset,
  shadowOpacity,
  shadowRadius,
  heightComponent,
  widthComponent,
} from '../../themes';
import { ITheme } from '../../themes/interface';
import { CustomBoxProps } from './interface';

const Box = createBox<ITheme>();

const CustomBox: React.FC<CustomBoxProps> = ({
  children,
  testID,
  ...props
}) => (
  <Box testID={testID || 'Box'} {...props}>
    {children}
  </Box>
);

export default createRestyleComponent<CustomBoxProps, ITheme>(
  [
    borderRadius,
    borderWidth,
    borderBottomWidth,
    borderTopWidth,
    borderLeftWidth,
    borderRightWidth,
    opacity,
    shadowOffset,
    shadowRadius,
    shadowOpacity,
    heightComponent,
    widthComponent,
  ],
  CustomBox,
);
