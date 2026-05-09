import "@/global.css";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import type { StyleProp, TextStyle } from "react-native";
import { Text, TextInput } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const defaultFontStyle = { fontFamily: "sans-regular" } as const;

type ComponentWithStyleDefaults = {
  defaultProps?: {
    style?: StyleProp<TextStyle>;
  };
};

function applyDefaultFont(component: object) {
  const typedComponent = component as ComponentWithStyleDefaults;

  typedComponent.defaultProps = typedComponent.defaultProps ?? {};
  typedComponent.defaultProps.style = [
    typedComponent.defaultProps.style,
    defaultFontStyle,
  ];
}

applyDefaultFont(Text);
applyDefaultFont(TextInput);

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "sans-regular": require("../assets/fonts/PlusJakartaSans-Regular.ttf"),
    "sans-medium": require("../assets/fonts/PlusJakartaSans-Medium.ttf"),
    "sans-semibold": require("../assets/fonts/PlusJakartaSans-SemiBold.ttf"),
    "sans-bold": require("../assets/fonts/PlusJakartaSans-Bold.ttf"),
    "sans-extrabold": require("../assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
    "sans-light": require("../assets/fonts/PlusJakartaSans-Light.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaProvider>
  );
}
