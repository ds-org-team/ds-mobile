import React from 'react';
import { ActivityIndicator, Pressable } from 'react-native';
import { createRestyleComponent, useTheme } from '@shopify/restyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  opacity,
  shadowOffset,
  shadowOpacity,
  shadowRadius,
} from '../../themes';

import Text from '../Text/Text';
import Box from '../Box/Box';
import { BorderWidthOptions, ButtonProps, ColorsOptions } from './interface';
import { ITheme } from '../../themes/interface';

const Button: React.FC<ButtonProps> = ({
  children,
  onPress,
  loading,
  textProps,
  variant = 'primary',
  disabled,
  icon,
  ...props
}) => {
  const { colors, borderRadii } = useTheme<ITheme>();

  const variantBgColor: ColorsOptions = {
    primary: !disabled ? 'action-main-primary' : 'surface-disabled',
    secondary: !disabled ? 'transparent' : 'surface-disabled',
    tertiary: 'transparent',
  };

  const variantPressedBgColor = {
    primary: colors['action-main-pressed'],
    secondary: colors.transparent,
    tertiary: colors.transparent,
  };

  const variantPressedTextColor: ColorsOptions = {
    primary: 'fittings-text-inverse-enabled',
    secondary: 'action-main-pressed',
    tertiary: 'action-main-pressed',
  };

  const variantPressedBorderColor: ColorsOptions = {
    primary: 'fittings-text-inverse-enabled',
    secondary: 'action-main-pressed',
    tertiary: 'action-main-pressed',
  };

  const variantBorderWidth: BorderWidthOptions = {
    primary: 'none',
    secondary: 'xs',
    tertiary: 'none',
  };

  const variantColor: ColorsOptions = {
    primary: !disabled
      ? 'fittings-text-inverse-enabled'
      : 'fittings-text-secondary-disabled',
    secondary: !disabled
      ? 'action-main-primary'
      : 'fittings-text-secondary-disabled',
    tertiary: !disabled
      ? 'action-main-primary'
      : 'fittings-text-secondary-disabled',
  };

  const variantIconColor = {
    primary: !disabled
      ? colors['fittings-icon-inverse-enabled']
      : colors['fittings-icon-inverse-disabled'],
    secondary: !disabled
      ? colors['action-main-primary']
      : colors['fittings-icon-primary-disabled'],
    tertiary: !disabled
      ? colors['action-main-primary']
      : colors['fittings-icon-primary-disabled'],
  };

  const variantLoadingColor = {
    primary: colors['fittings-icon-inverse-enabled'],
    secondary: colors['action-main-primary'],
    tertiary: colors['action-main-primary'],
  };

  return (
    <Box
      backgroundColor={variantBgColor[variant]}
      borderColor={variantPressedBorderColor[variant]}
      bw={variantBorderWidth[variant]}
      borderRadius="nano"
      shadowColor="fittings-text-primary-enabled"
      minHeight={{ phone: 48, tablet: 48 }}
      alignItems="center"
      justifyContent="center"
      flexShrink={5}
      testID="button-box"
      {...props}
    >
      <Pressable
        android_disableSound={loading}
        onPress={() => (!loading ? onPress() : () => undefined)}
        disabled={disabled}
        testID="ds-button"
        style={({ pressed }) => [
          {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: '100%',
            height: '100%',
            opacity: disabled ? 0.5 : 1,
            borderRadius: borderRadii.nano,
          },
          {
            backgroundColor:
              pressed && !loading
                ? variantPressedBgColor[variant]
                : 'transparent',
          },
        ]}
      >
        {({ pressed }) =>
          loading ? (
            <ActivityIndicator size={16} color={variantLoadingColor[variant]} />
          ) : (
            <Box
              flexDirection="row"
              alignItems="center"
              justifyContent="center"
            >
              {icon && (
                <Box mr="quark">
                  <Icon
                    name={icon}
                    size={24}
                    color={variantIconColor[variant]}
                  />
                </Box>
              )}
              <Text
                fontWeight="600"
                fs="md"
                color={
                  pressed
                    ? variantPressedTextColor[variant]
                    : variantColor[variant]
                }
                {...textProps}
              >
                {children}
              </Text>
            </Box>
          )
        }
      </Pressable>
    </Box>
  );
};

export default createRestyleComponent<ButtonProps, ITheme>(
  [opacity, shadowOffset, shadowRadius, shadowOpacity],
  Button,
);
