import { StyleProp, ViewStyle } from "react-native";
import Animated, { AnimatedStyle } from "react-native-reanimated";

export type HomeScreenWrapperProps = {
  children: React.ReactNode;
  animatedStyle: StyleProp<AnimatedStyle<StyleProp<ViewStyle>>>;
  onPress: () => void;
};
