import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  Text,
  TouchableOpacity,
  Button,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { db } from "../../config";

//screen
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import Header from "../components/Header";
//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function AddNote(props) {
  const [title, setTitle] = useState("");
  const [note, setNotes] = useState("");

  const handleAddDocument = async () => {
    if (title && note) {
      try {
        await db.collection("notes").add({
          title: title,
          note: note,
        });
        console.log("Document added successfully!");
        // Clear the input fields after adding the document
        setTitle("");
        setNotes("");
        // Navigate back to the "Home" screen
        props.navigation.navigate("Home");
      } catch (error) {
        console.log("Error adding document:", error);
      }
    }
  };
  return (
    <Screen
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: Colors.white,
      }}
    >
      <Header name="Notes" />
      <View style={{ marginTop: RFPercentage(5) }} />
      <View
        style={{
          width: "90%",
          height: RFPercentage(6),
          backgroundColor: Colors.lightWhite,
          paddingLeft: RFPercentage(3),
          borderRadius: RFPercentage(1),
          justifyContent: "center",
        }}
      >
        <TextInput
          placeholder="Title"
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
      </View>
      <View style={{ marginTop: RFPercentage(2) }} />
      <View
        style={{
          width: "90%",
          height: RFPercentage(6),
          backgroundColor: Colors.lightWhite,
          paddingLeft: RFPercentage(3),
          borderRadius: RFPercentage(1),
          justifyContent: "center",
        }}
      >
        <TextInput
          placeholder="Description"
          value={note}
          onChangeText={(text) => setNotes(text)}
          multiline={true}
        />
      </View>
      {/* <Button  /> */}
      <View style={{ marginTop: RFPercentage(1) }} />

      <TouchableOpacity
        disabled={!title || !note}
        onPress={handleAddDocument}
        style={styles.loginbutton}
        activeOpacity={0.7}
      >
        <AppButton title="Add" buttonColor={Colors.blue} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("Home");
        }}
        style={styles.loginbutton}
        activeOpacity={0.7}
      >
        <AppButton title="View Notes" buttonColor={Colors.green} />
      </TouchableOpacity>
    </Screen>
  );
}
const styles = StyleSheet.create({
  loginbutton: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: RFPercentage(1),
  },
});
