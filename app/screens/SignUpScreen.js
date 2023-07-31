import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { Alert } from "react-native";
import { Input, Button } from "react-native-elements";
import { auth } from "../../config";
import { RFPercentage } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";

//screen
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

const SignUpScreen = (props) => {
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const navigation = useNavigation();
  const handleSignup = () => {
    auth
      .createUserWithEmailAndPassword(signupEmail, signupPassword)
      .then((userCredential) => {
        // Handle successful signup
        console.log("User signed up successfully!", userCredential.user);
        navigation.replace("LoginScreen");
      })
      .catch((error) => {
        // Handle signup errors
        if (error.code === "auth/email-already-in-use") {
          Alert.alert(
            "Already Registered",
            "The email address is already registered."
          );
        } else {
          console.log("Signup error:", error);
        }
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.logocontainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/images/enoteslogo.png")}
        />
      </View>
      {/* Signup inputs */}
      <Input
        label="Email"
        value={signupEmail}
        onChangeText={(text) => setSignupEmail(text)}
      />
      <Input
        label="Password"
        value={signupPassword}
        secureTextEntry
        onChangeText={(text) => setSignupPassword(text)}
      />
      {/* signup */}
      <TouchableOpacity
        onPress={handleSignup}
        style={styles.loginbutton}
        activeOpacity={0.7}
      >
        <AppButton title="Signup" buttonColor={Colors.blue} />
      </TouchableOpacity>
      {/* Login*/}
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("LoginScreen");
        }}
        style={styles.loginbutton}
        activeOpacity={0.7}
      >
        <AppButton title="Back" buttonColor={Colors.green} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    marginBottom: RFPercentage(15),
  },
  logocontainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: RFPercentage(30),
    height: RFPercentage(30),
  },
  loginbutton: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: RFPercentage(1),
  },
});

export default SignUpScreen;
