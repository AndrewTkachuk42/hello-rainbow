import { ScreenConfig } from "@/src/constants/screen/screen";
import { FadeIn } from "react-native-reanimated";

const TITLE_SIZE_RATIO = 0.12;
const TITLE_FONT_SIZE = ScreenConfig.SCREEN_WIDTH * TITLE_SIZE_RATIO;
const MESSAGE_FONT_SIZE = 16;
const FADE_IN_DURATION = 500;
const FADE_IN_DELAY = 700;
const FADE_IN_ANIMATION =
  FadeIn.duration(FADE_IN_DURATION).delay(FADE_IN_DELAY);

export const HomeScreenMessageConstants = {
  TITLE_FONT_SIZE,
  MESSAGE_FONT_SIZE,
  FADE_IN_ANIMATION,
};
