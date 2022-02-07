import { useTheme } from '@shopify/restyle';
import { StyleSheet, ViewStyle } from 'react-native';
import { ITheme } from '../../themes/interface';

interface Props {
  checked: boolean;
  disabled: boolean;
  required: boolean;
}

interface Styles {
  checkBox: ViewStyle;
}

const useStyles = ({
  checked,
  disabled,
  required,
}: Props): StyleSheet.NamedStyles<Styles> => {
  const { colors } = useTheme<ITheme>();

  let borderColor;
  if (disabled) borderColor = colors['fittings-border-primary-disabled'];
  else if (required) borderColor = colors['feedback-negative-border'];
  else borderColor = colors['fittings-border-primary-enabled'];

  let bg;
  if (disabled) bg = colors['surface-disabled'];
  else if (checked) bg = colors['feedback-informative-fill'];
  else bg = colors.transparent;

  return StyleSheet.create({
    checkBox: {
      width: 24,
      height: 24,
      borderWidth: checked ? 0 : 2,
      borderRadius: 4,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: bg,
      borderColor,
    },
  });
};

export default useStyles;
