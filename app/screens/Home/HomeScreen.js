import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React, { useState, useEffect } from "react";
import MapView from "react-native-maps";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function HomeScreen({ navigation }) {
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

      <TouchableOpacity
        style={styles.lookup}
        onPress={() => {
          navigation.navigate("Routes");
        }}
      >
        <Ionicons
          style={styles.searchIcon_lookup}
          name="ios-search"
          size={43}
          color="#248DDE"
        />
        <View style={styles.lookup_text}>
          <Text style={styles.lookup_text_header}>Look up</Text>
          <Text style={styles.lookup_text_body}>About the bus route</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  lookup_text: {
    alignItems: "center",
  },

  lookup_text_header: {
    fontSize: 20,
    fontWeight: 500,
  },

  lookup_text_body: {
    fontSize: 14,
    color: "#C7C5CD",
  },
  lookup: {
    position: "absolute",
    alignItems: "center",
    bottom: 16,
    left: 16,
    right: 16,
    width: "45%",
    height: 122,
    backgroundColor: "white",
    borderRadius: 20,
  },

  searchSection: {
    position: "absolute",
    top: 16 + StatusBar.currentHeight,
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

  searchIcon_lookup: {
    paddingBottom: 5,
    paddingTop: 13,
  },

  input: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
