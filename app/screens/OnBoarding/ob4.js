import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { ImageBackground } from "react-native";
import { Image, StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Alert, Linking } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const OnBoarding = ({ navigation }) => {
  return (
    <>
    <View style = {styles.container}>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "space-between",
    backgroundColor: 'white',
  },

});

export default OnBoarding;