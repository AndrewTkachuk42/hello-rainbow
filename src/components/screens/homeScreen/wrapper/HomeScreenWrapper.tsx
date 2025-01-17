import Animated from "react-native-reanimated";
import { StyleSheet, Pressable } from "react-native";

import { HomeScreenWrapperConstants } from "./constants";
import { HomeScreenWrapperProps } from "./types";
import { useHomeScreenWrapper } from "../hooks/useHomeScreen/useHomeScreen";

const { FADE_IN_ANIMATION } = HomeScreenWrapperConstants;

const HomeScreenWrapper = ({ children }: HomeScreenWrapperProps) => {
  const { backgroundStyle, changeBackgroundColor } = useHomeScreenWrapper();

  return (
    <Pressable style={styles.pressable} onPress={changeBackgroundColor}>
      <Animated.View
        entering={FADE_IN_ANIMATION}
        style={[styles.container, backgroundStyle]}
      >
        {children}
      </Animated.View>
    </Pressable>
  );
};

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
