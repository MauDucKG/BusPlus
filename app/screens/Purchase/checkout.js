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
  
  export default function PodCastScreen({ navigation }) {
    const [text, onChangeText] = React.useState("Useless Text");
    return (
      <SafeAreaView style={styles.container}>
        
        <View style={styles.searchSection}>
          <Text style={styles.welcome}>Enjoying The Moment</Text>
          <View style={styles.searchSection1}>
            <Ionicons
              style={styles.searchIcon}
              name="ios-search"
              size={20}
              color="#000"
            />
            <TextInput
              style={styles.input}
              placeholder="Search the podcast here ..."
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
  });
  