import { Stack } from "expo-router";

import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

export default function RootLayout() {
  return <Stack screenOptions={screenOptions} />;
}
