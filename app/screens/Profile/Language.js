import * as React from "react";
import { useState, useEffect } from "react";
import { ImageBackground } from "react-native";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
  Linking,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";

const Language = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F9F8FC" }}>
      <View
        style={{
          marginTop: 15,
          marginHorizontal: 14,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ position: "absolute", left: 5 }}
        >
          <MaterialIcons name="keyboard-arrow-left" size={34} color="grey" />
        </TouchableOpacity>

        <Text style={{ fontSize: 22 }}>Language</Text>

        <TouchableOpacity
          // onPress={{}}
          style={{ position: "absolute", right: 5 }}
        >
          <Text style={{color:"#C84771"}}>Save</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity >
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              backgroundColor: "#fff",
              width: "90%",
              padding: 20,
              borderRadius: 10,
              margin: 20,
            }}
          >
            <Text style={{ fontSize: 18, marginLeft: 10 }}>English</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity >
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              backgroundColor: "#fff",
              width: "90%",
              padding: 20,
              borderRadius: 10,
              marginHorizontal: 20,
            }}
          >
            <Text style={{ fontSize: 18, marginLeft: 10 }}>Vietnamese</Text>
          </View>
        </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Language;
