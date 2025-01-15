import HomeScreenMessage from "./message/HomeScreenMessage";
import { useHomeScreen } from "./useHomeScreen";
import HomeScreenWrapper from "./wrapper/HomeScreenWrapper";

const HomeScreen = () => {
  const { backgroundStyle, textStyle, changeBackgroundColor } = useHomeScreen();

  return (
    <HomeScreenWrapper
      animatedStyle={backgroundStyle}
      onPress={changeBackgroundColor}
    >
      <HomeScreenMessage animatedStyle={textStyle} />
    </HomeScreenWrapper>
  );
};

export default HomeScreen;
