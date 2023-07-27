import React from "react";
import { Platform, SafeAreaView, StyleSheet, StatusBar } from "react-native";
//config
import Colors from "../config/Colors";

function Screen({ children, statusBarColor = Colors.primary, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      {Platform.OS === "android" ? (
        <StatusBar backgroundColor={statusBarColor} barStyle="dark-content" />
      ) : null}
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default Screen;
