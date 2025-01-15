import Animated from "react-native-reanimated";
import { StyleSheet, Pressable } from "react-native";

import HomeScreenMessage from "./message/HomeScreenMessage";
import { useHomeScreen } from "./useHomeScreen";
import HomeScreenConstants from "./constants";

const { FADE_IN_ANIMATION } = HomeScreenConstants;

const HomeScreen = () => {
  const { backgroundStyle, textStyle, changeBackgroundColor } = useHomeScreen();

  return (
    <Pressable style={styles.pressable} onPress={changeBackgroundColor}>
      <Animated.View
        entering={FADE_IN_ANIMATION}
        style={[styles.container, backgroundStyle]}
      >
        <HomeScreenMessage animatedStyle={textStyle} />
      </Animated.View>
    </Pressable>
  );
};

export default HomeScreen;

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
