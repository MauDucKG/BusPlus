import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import MapView from "react-native-maps";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Checkout({ navigation }) {
  const handle = () => {
    return navigation.navigate('PaymentMethod');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container1}>
      <Image style={styles.logo} source={require("../../assets/momo.jpg")} />
      </View>
      <View style={styles.container1}>
        <TouchableOpacity style={styles.button} onPress={handle}>
          <Text style={styles.thanhText}>Cancel</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container1}>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "space-between",
  },
  container1: {
    paddingTop: 60,
    alignItems: 'center',
    justifyContent: "center",
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
  welcome: {
      fontWeight: "bold",
      fontSize: 18,
      width: '100%',
      textAlign: "center",
      paddingBottom: 15,
    },
    button: {
      width: "30%",
      height: 45,
      backgroundColor: "#F2A3BD",
      borderRadius: 30,
      alignItems: "center",
      justifyContent: "center",
      position: 'absolute'
    },
  
    thanhText: {
      color: "black",
      fontSize: 14,
      fontWeight: "bold",
    },
    logo: {
      width: "100%",
      resizeMode: "contain",
    },
});
