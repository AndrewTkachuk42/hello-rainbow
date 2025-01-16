import HomeScreenMessage from "./message/HomeScreenMessage";
import HomeScreenWrapper from "./wrapper/HomeScreenWrapper";
import { useHomeScreen } from "./hooks/useHomeScreen/useHomeScreen";

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
