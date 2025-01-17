import { StyleSheet } from "react-native";
import Animated from "react-native-reanimated";

import { strings } from "@/src/constants/strings/strings";
import { HomeScreenMessageConstants } from "./constants";
import { HomeScreenMessageTextProps } from "./types";

const {
  FADE_IN_ANIMATION,
  TITLE_FONT_SIZE,
  MESSAGE_FONT_SIZE,
  TEXT_COLOR,
  TEXT_OPACITY,
} = HomeScreenMessageConstants;

const MessageText = ({ style, text }: HomeScreenMessageTextProps) => (
  <Animated.Text style={style}>{text}</Animated.Text>
);

const HomeScreenMessage = () => (
  <Animated.View style={styles.container} entering={FADE_IN_ANIMATION}>
    <MessageText style={styles.title} text={strings.greating} />
    <MessageText style={styles.message} text={strings.homeScreenMessage} />
  </Animated.View>
);

export default HomeScreenMessage;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    opacity: TEXT_OPACITY,
  },
  title: {
    color: TEXT_COLOR,
    fontSize: TITLE_FONT_SIZE,
  },
  message: {
    color: TEXT_COLOR,
    fontSize: MESSAGE_FONT_SIZE,
  },
});
