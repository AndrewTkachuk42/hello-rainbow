import { StyleProp, TextStyle } from "react-native";

export type HomeScreenMessageProps = {
  animatedStyle: StyleProp<TextStyle>;
};

export type AnimatedMessageTextProps = HomeScreenMessageProps & {
  style: StyleProp<TextStyle>;
  text: string;
};
