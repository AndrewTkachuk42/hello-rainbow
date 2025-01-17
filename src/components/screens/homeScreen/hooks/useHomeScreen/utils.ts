import { UseHomeScreenConstants } from "./constants";

const { ANIMATION_DURATION_MULTIPLIER, DEGREES_IN_CIRCLE } =
  UseHomeScreenConstants;

export const prepareAnimationOptions = (hue: number) => {
  const newHue = Math.round(Math.random() * DEGREES_IN_CIRCLE);
  const difference = Math.abs(newHue - hue);
  const duration = Math.log(difference || 1) * ANIMATION_DURATION_MULTIPLIER;

  return { duration, newHue };
};
