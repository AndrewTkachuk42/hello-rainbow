import { StyleSheet, StyleProp, TextStyle } from "react-native";
import Animated from "react-native-reanimated";

import { strings } from "@/src/constants/strings/strings";
import HomeScreenMessageConstants from "./constants";
import { HomeScreenMessageProps, AnimatedMessageTextProps } from "./types";

const { FADE_IN_ANIMATION, TITLE_FONT_SIZE, MESSAGE_FONT_SIZE } =
  HomeScreenMessageConstants;

const AnimatedMessageText = ({
  style,
  animatedStyle,
  text,
}: AnimatedMessageTextProps) => (
  <Animated.Text style={[style, animatedStyle]}>{text}</Animated.Text>
);

const HomeScreenMessage = ({ animatedStyle }: HomeScreenMessageProps) => (
  <Animated.View entering={FADE_IN_ANIMATION}>
    <AnimatedMessageText
      style={styles.title}
      animatedStyle={animatedStyle}
      text={strings.greating}
    />
    <AnimatedMessageText
      style={styles.message}
      animatedStyle={animatedStyle}
      text={strings.homeScreenMessage}
    />
  </Animated.View>
);

export default HomeScreenMessage;

const styles = StyleSheet.create({
  title: {
    fontSize: TITLE_FONT_SIZE,
  },
  message: {
    fontSize: MESSAGE_FONT_SIZE,
  },
});
