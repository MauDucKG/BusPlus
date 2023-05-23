import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { ImageBackground } from "react-native";
import { Image, StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Alert, Linking } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const OnBoarding = ({ navigation }) => {
    const handlePress = () => {
      navigation.navigate('ob3');
    };
    useEffect(() => {
        // Chờ 1 giây trước khi chuyển sang trang đăng nhập
        const timer = setTimeout(() => {
            navigation.navigate('ob3');
        }, 1000);

        // Clear timeout khi component bị unmount
        // return () => clearTimeout(timer);
        }, []);
    
  return (
    <>
      <TouchableOpacity style={styles.container} onPress={handlePress}>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    backgroundColor: '#C84771',
    alignItems: 'center',
  },

  text: {
    color: '#C84771',
    fontSize: 40,
    fontWeight: "bold",
  }

});

export default OnBoarding;