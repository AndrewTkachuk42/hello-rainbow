import { useCallback } from "react";
import {
  useSharedValue,
  Easing,
  withTiming,
  useAnimatedStyle,
} from "react-native-reanimated";

import { ColorsConfig } from "@/src/constants/colors/colors";
import { formatHSLColor } from "@/src/constants/utils/colors";

const {
  BASE_HUE,
  HUE_STEP,
  BACKGROUND_SATURATION,
  BACKGROUND_LIGHTNESS,
  TEXT_HUE_OFFSET,
  TEXT_SATURATION,
  TEXT_LIGHTNESS,
  ANIMATION_DURATION,
} = ColorsConfig;

export const useHomeScreen = () => {
  const hue = useSharedValue(BASE_HUE);

  const changeBackgroundColor = useCallback(() => {
    const newHue = hue.value + HUE_STEP;

    hue.value = withTiming(newHue, {
      duration: ANIMATION_DURATION,
      easing: Easing.inOut(Easing.quad),
    });
  }, [hue]);

  const backgroundStyle = useAnimatedStyle(() => ({
    backgroundColor: formatHSLColor(
      hue.value,
      BACKGROUND_SATURATION,
      BACKGROUND_LIGHTNESS
    ),
  }));

  const textStyle = useAnimatedStyle(() => ({
    color: formatHSLColor(
      hue.value + TEXT_HUE_OFFSET,
      TEXT_SATURATION,
      TEXT_LIGHTNESS
    ),
  }));

  return {
    changeBackgroundColor,
    backgroundStyle,
    textStyle,
  };
};