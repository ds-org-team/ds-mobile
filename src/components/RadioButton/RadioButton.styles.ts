import { useTheme } from '@shopify/restyle';
import { StyleSheet, ViewStyle } from 'react-native';
import { ITheme } from '../../themes/interface';

interface Props {
  checked: boolean;
  disabled: boolean;
  required: boolean;
}

interface Styles {
  radioButtonItem: ViewStyle;
}

const useStyles = ({
  checked,
  disabled,
  required,
}: Props): StyleSheet.NamedStyles<Styles> => {
  const theme = useTheme<ITheme>();

  let borderColor;
  if (disabled) borderColor = theme.colors['fittings-border-primary-disabled'];
  else if (checked) borderColor = theme.colors['feedback-informative-border'];
  else if (required) borderColor = theme.colors['feedback-negative-border'];
  else borderColor = theme.colors['fittings-border-primary-enabled'];

  let bg;
  if (disabled) bg = theme.colors['surface-disabled'];
  // else if (checked) bg = theme.colors['feedback-info-base'];
  else bg = theme.colors.transparent;

  return StyleSheet.create({
    radioButtonItem: {
      width: 24,
      height: 24,
      borderWidth: checked ? 5 : 2,
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: bg,
      borderColor,
    },
  });
};

export default useStyles;
