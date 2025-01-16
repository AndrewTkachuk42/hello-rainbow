import { useCallback } from "react";
import {
  useSharedValue,
  Easing,
  withTiming,
  useAnimatedStyle,
} from "react-native-reanimated";

import { formatHSLColor } from "@/src/utils/colors";
import { UseHomeScreenConstants } from "./constants";

const {
  BASE_HUE,
  HUE_STEP,
  BACKGROUND_SATURATION,
  BACKGROUND_LIGHTNESS,
  TEXT_HUE_OFFSET,
  TEXT_SATURATION,
  TEXT_LIGHTNESS,
  ANIMATION_DURATION,
} = UseHomeScreenConstants;

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
      hue.value + TEXT_HUE_OFFSET, // Text color has a different hue than background color. But it follows the analogous color palette scheme, so it always looks nice.
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
