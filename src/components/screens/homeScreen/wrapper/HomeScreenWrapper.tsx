import Animated from "react-native-reanimated";
import { StyleSheet, Pressable } from "react-native";

import HomeScreenConstants from "../constants";
import { HomeScreenWrapperProps } from "./types";

const { FADE_IN_ANIMATION } = HomeScreenConstants;

const HomeScreenWrapper = ({
  children,
  animatedStyle,
  onPress,
}: HomeScreenWrapperProps) => (
  <Pressable style={styles.pressable} onPress={onPress}>
    <Animated.View
      entering={FADE_IN_ANIMATION}
      style={[styles.container, animatedStyle]}
    >
      {children}
    </Animated.View>
  </Pressable>
);

export default HomeScreenWrapper;

const styles = StyleSheet.create({
  pressable: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
