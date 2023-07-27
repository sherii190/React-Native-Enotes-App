import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

//screen
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function Header({ name }) {
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: Colors.blue,
        height: "15%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          marginLeft: RFPercentage(2),
          fontFamily: FontFamily.semiBold,
          fontSize: RFPercentage(4),
          color: Colors.white,
        }}
      >
        {name}
      </Text>
    </View>
  );
}
