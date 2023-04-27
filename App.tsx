import { StatusBar } from "expo-status-bar";
import { Home } from "./src/pages/Home";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";
import React from "react";
import AppLoading from "expo-app-loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <Home />
      <StatusBar style="light" backgroundColor="transparent" translucent />
    </>
  );
}
