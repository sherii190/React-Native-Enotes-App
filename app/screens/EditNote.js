import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  Button,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { db } from "../../config";
import { useNavigation } from "@react-navigation/native";

//screen
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import Header from "../components/Header";
//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function EditNote({ route }) {
  const [notetitle, setNoteTitle] = useState(route.params.item.title);
  const [noteDescription, setNoteDescription] = useState(
    route.params.item.note
  );
  const navigation = useNavigation();
  const handleUpdateDocument = async () => {
    if (notetitle && noteDescription) {
      try {
        const docRef = db.collection("notes").doc(route.params.item.id);
        await docRef.update({
          title: notetitle,
          note: noteDescription,
        });
        console.log("Document updated successfully!");
        navigation.navigate("Home"); // Navigate to another screen
      } catch (error) {
        console.log("Error updating document:", error);
      }
    }
  };

  const handleDeleteDocument = async () => {
    try {
      const docRef = db.collection("notes").doc(route.params.item.id);
      await docRef.delete();
      console.log("Document deleted successfully!");
      // Clear the input fields after deleting the document
      setNoteTitle("");
      setNoteDescription("");

      navigation.navigate("Home");
    } catch (error) {
      console.log("Error deleting document:", error);
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
      <Header name="Edit Note" />
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
          value={notetitle}
          onChangeText={(text) => setNoteTitle(text)}
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
          value={noteDescription}
          onChangeText={(text) => setNoteDescription(text)}
          multiline={true}
        />
      </View>

      <TouchableOpacity
        disabled={!notetitle || !noteDescription}
        onPress={handleUpdateDocument}
        style={styles.loginbutton}
        activeOpacity={0.7}
      >
        <AppButton title="Update" buttonColor={Colors.blue} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleDeleteDocument}
        style={styles.loginbutton}
        activeOpacity={0.7}
      >
        <AppButton title="Delete" buttonColor={Colors.red} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
        style={styles.loginbutton}
        activeOpacity={0.7}
      >
        <AppButton title="Back" buttonColor={Colors.green} />
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
