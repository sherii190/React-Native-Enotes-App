import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";
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

const LoginScreen = (props) => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Handle successful login
        console.log("User logged in successfully!", userCredential.user);
        navigation.replace("Home");
      })
      .catch((error) => {
        // Handle login errors
        console.log("Login error:", error);
        if (
          error.code === "auth/invalid-email" ||
          error.code === "auth/wrong-password"
        ) {
          Alert.alert(
            "Invalid email or password",
            "Please enter a valid email and password."
          );
        } else {
          Alert.alert(
            "Login Error",
            "An error occurred during login. Please try again later."
          );
        }
      });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.logocontainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/images/enoteslogo.png")}
        />
      </View>
      <Input
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Input
        label="Password"
        value={password}
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />

      {/* login */}
      <TouchableOpacity
        onPress={handleLogin}
        style={styles.loginbutton}
        activeOpacity={0.7}
      >
        <AppButton title="Login" buttonColor={Colors.blue} />
      </TouchableOpacity>

      {/* signup */}
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("SignUpScreen");
        }}
        style={styles.loginbutton}
        activeOpacity={0.7}
      >
        <AppButton title="Register" buttonColor={Colors.green} />
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

export default LoginScreen;
