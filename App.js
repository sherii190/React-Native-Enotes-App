import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  useFonts,
  Urbanist_300Light,
  Urbanist_400Regular,
  Urbanist_500Medium,
  Urbanist_600SemiBold,
  Urbanist_700Bold,
} from "@expo-google-fonts/urbanist";

//navigation
import NavigationStack from "./app/navigation/NavigationStack";

//component
import AppLoading from "./app/components/AppLoading";

export default function App() {
  const [fontsLoaded] = useFonts({
    Urbanist_300Light,

    Urbanist_400Regular,

    Urbanist_500Medium,

    Urbanist_600SemiBold,

    Urbanist_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <NavigationStack />
      </NavigationContainer>
    );
  }
}
