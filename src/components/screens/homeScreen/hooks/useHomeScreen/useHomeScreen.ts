import { useCallback } from "react";
import {
  useSharedValue,
  Easing,
  withTiming,
  useAnimatedStyle,
} from "react-native-reanimated";

import { formatHSLColor } from "@/src/utils/colors";
import { UseHomeScreenConstants } from "./constants";
import { prepareAnimationOptions } from "./utils";

const { BASE_HUE, BACKGROUND_SATURATION, BACKGROUND_LIGHTNESS } =
  UseHomeScreenConstants;

export const useHomeScreenWrapper = () => {
  const hue = useSharedValue(BASE_HUE);

  const changeBackgroundColor = useCallback(() => {
    const { newHue, duration } = prepareAnimationOptions(hue.value);

    hue.value = withTiming(newHue, {
      duration,
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

  return {
    changeBackgroundColor,
    backgroundStyle,
  };
};
