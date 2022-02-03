import React from 'react';
import { createRestyleComponent, createText } from '@shopify/restyle';
import { fontSize, letterSpacing, lineHeight } from '../../themes';
import { CustomTextProps } from './interface';
import { ITheme } from '../../themes/interface';

const Text = createText<ITheme>();

const CustomText: React.FC<CustomTextProps> = ({ children, ...props }) => (
  <Text variant="regular" color="fittings-text-primary-enabled" {...props}>
    {children}
  </Text>
);

export default createRestyleComponent<CustomTextProps, ITheme>(
  [fontSize, lineHeight, letterSpacing],
  CustomText,
);
