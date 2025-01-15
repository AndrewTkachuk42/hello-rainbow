export const formatHSLColor = (
  hue: number,
  saturation: number,
  lightness: number
) => {
  "worklet";
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};
