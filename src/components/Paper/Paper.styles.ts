import { useTheme } from '@shopify/restyle';
import { ViewStyle, StyleSheet } from 'react-native';
import { shadowOffsetValues, shadowRadiusValues } from '../../themes';
import { ITheme } from '../../themes/interface';

interface Styles {
  customStyle: ViewStyle;
}

const useStyles = (): StyleSheet.NamedStyles<Styles> => {
  const { colors, borderRadii } = useTheme<ITheme>();
  return StyleSheet.create({
    customStyle: {
      shadowOffset: shadowOffsetValues.lg,
      shadowColor: colors['fittings-icon-primary-enabled'],
      shadowRadius: shadowRadiusValues.sm,
      shadowOpacity: 0.3,
      backgroundColor: colors['surface-default'],
      minHeight: 'auto',
      minWidth: 'auto',
      padding: 0,
      borderRadius: borderRadii.md,
      width: '100%',
    },
  });
};

export default useStyles;
