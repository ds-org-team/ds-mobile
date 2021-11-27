import { createBox, createRestyleComponent } from '@shopify/restyle';
import React from 'react';
import {
  widthSize,
  heightSize,
  borderRadius,
  borderWidth,
  opacity,
  shadowOffset,
  shadowOpacity,
  shadowRadius,
  Theme,
  heightComponent,
} from '../../themes';
import { CustomBoxProps } from './interface';

const Box = createBox<Theme>();

const CustomBox: React.FC<CustomBoxProps> = ({ children, ...props }) => (
  <Box {...props} testID="Box">
    {children}
  </Box>
);

export default createRestyleComponent<CustomBoxProps, Theme>(
  [
    widthSize,
    heightSize,
    borderRadius,
    borderWidth,
    opacity,
    shadowOffset,
    shadowRadius,
    shadowOpacity,
    heightComponent,
  ],
  CustomBox,
);
