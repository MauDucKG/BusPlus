import { SafeAreaView, View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import MapView from "react-native-maps";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function HomeScreen() {
  const [text, onChangeText] = React.useState("Useless Text");
  return (
    <SafeAreaView style={styles.container}>
      <MapView style={styles.map} />
      <View style={styles.searchSection}>
        <View style={styles.searchSection1}>
          <Ionicons
            style={styles.searchIcon}
            name="ios-search"
            size={20}
            color="#000"
          />
          <TextInput
            style={styles.input}
            placeholder="Search for a location ..."
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  searchSection: {
    position: "absolute",
    top: 16,
    left: 16,
    right: 16,
    flex: 1,
  },

  searchSection1: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 8,
    height: 58,
    width: "100%",
    borderColor: "#F5C0D2",
    backgroundColor: "white",
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
