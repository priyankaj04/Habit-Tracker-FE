import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect, useCallback } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [fontsLoaded] = useFonts({
    PoppingsThin: require("../assets/fonts/Poppins-Thin.ttf"),
    PoppingsSemibold: require("../assets/fonts/Poppins-SemiBold.ttf"),
    PoppingsRegular: require("../assets/fonts/Poppins-Regular.ttf"),
    PoppingsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
    PoppingsLight: require("../assets/fonts/Poppins-Light.ttf"),
    PoppingsExtralight: require("../assets/fonts/Poppins-ExtraLight.ttf"),
    PoppingsExtrabold: require("../assets/fonts/Poppins-ExtraBold.ttf"),
    PoppingsBold: require("../assets/fonts/Poppins-Bold.ttf"),
    PoppingsBlack: require("../assets/fonts/Poppins-Black.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      try {
        await SplashScreen.hideAsync();
      } catch (error) {
        console.warn("Error hiding splash screen:", error);
      }
    }
  }, [fontsLoaded]);

  useEffect(() => {
    onLayoutRootView();
  }, [onLayoutRootView]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="+not-found" />
        <Stack.Screen name="home" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
