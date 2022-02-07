import { useTheme } from '@shopify/restyle';
import { Animated, ViewStyle } from 'react-native';
import { borderWidthValues } from '../../themes';
import { ITheme } from '../../themes/interface';

type UseStyleProps = {
  disabled?: boolean;
};

interface Styles {
  dynamicStyles: {
    container(anim: Animated.Value): ViewStyle;
    circle(anim: Animated.Value): ViewStyle;
  };
  basicStyles: {
    circle: ViewStyle;
  };
}

const useStyles = ({ disabled }: UseStyleProps): Styles => {
  const theme = useTheme<ITheme>();

  const dynamicStyles = {
    container: (anim: Animated.Value): ViewStyle => ({
      alignItems: 'center',
      backgroundColor: disabled
        ? theme.colors['surface-disabled']
        : (anim.interpolate({
            inputRange: [0, 1],
            outputRange: [
              theme.colors.transparent,
              theme.colors['feedback-informative-fill'],
            ],
          }) as unknown as string),
      borderRadius: 25,
      height: 24,
      width: 40,
      justifyContent: 'center',
      borderWidth: disabled
        ? borderWidthValues.none
        : (anim.interpolate({
            inputRange: [0, 1],
            outputRange: [borderWidthValues.sm, 0],
          }) as unknown as number),
      borderColor: disabled
        ? theme.colors['fittings-border-primary-disabled']
        : theme.colors['fittings-border-primary-enabled'],
    }),
    circle: (anim: Animated.Value): ViewStyle => ({
      transform: [
        {
          translateX: anim.interpolate({
            inputRange: [0, 1],
            outputRange: [-8, 8],
          }) as unknown as number,
        },
      ],
      backgroundColor: disabled
        ? theme.colors['fittings-icon-primary-disabled']
        : (anim.interpolate({
            inputRange: [0, 1],
            outputRange: [
              theme.colors['fittings-icon-primary-enabled'],
              theme.colors['fittings-icon-inverse-enabled'],
            ],
          }) as unknown as string),
    }),
  };

  const basicStyles = {
    circle: {
      width: 16,
      height: 16,
      backgroundColor: 'red',
      borderRadius: 8,
    },
  };
  return {
    dynamicStyles,
    basicStyles,
  };
};

export default useStyles;
