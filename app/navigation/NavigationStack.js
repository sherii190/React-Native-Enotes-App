import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

//screens
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import Home from "../screens/Home";
import AddNote from "../screens/AddNote";
import EditNote from "../screens/EditNote";
import SplashScreen from "../screens/SplashScreen";

const Stack = createStackNavigator();

export default function NavigationStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerMode: "false" }}
      initialRouteName="SplashScreen"
    >
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />

      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AddNote" component={AddNote} />
      <Stack.Screen name="EditNote" component={EditNote} />
    </Stack.Navigator>
  );
}
