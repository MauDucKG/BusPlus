import { StatusBar } from "expo-status-bar";
import React, {useEffect, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  Animated
} from "react-native";
import LottieView from 'lottie-react-native';

export default WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{height: 375, width: 375}}>
        <LottieView
          source={require('../../assets/bus-transport.json')}
          autoPlay
          loop
        />
      </View>

    <View style={styles.container1}>  
      <View style={styles.container2}>  
        <StatusBar style="auto" />

        <View style={styles.containdots}>
          <TouchableOpacity
            onPress={() => navigation.navigate("ob3", { name: "ob3" })}
          >
            <Image
              style={styles.dot}
              source={require("../../assets/dot1.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("ob4", { name: "ob4" })}
          >
            <Image
              style={styles.dot}
              source={require("../../assets/dot.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("ob5", { name: "pb5" })}
          >
            <Image
              style={styles.dot}
              source={require("../../assets/dot.png")}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.container2}>          
        <Text style={styles.welcome}>Welcome to the BusPlus App</Text>
      </View>

      <View style={styles.container2}>          
        <Text style={styles.slogan1}>
          Our app is designed to provide the best user experience possible. We hope you'll enjoy it!
        </Text>
      </View>
      
      <View style={styles.container2}>          
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("ob4", { name: "ob4" })}
        >
          <Text style={styles.thanhText}>NEXT</Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "space-between",
    backgroundColor: 'white',
  },
  container1: {
    justifyContent: "space-between",
  },
  welcome: {
    fontWeight: "bold",
    fontSize: 26,
    width: 230,
    height: 100,
    textAlign: "center",
  },
  discover: {
    fontWeight: "bold",
    fontSize: 30,
    width: 300,
    height: 100,
    textAlign: "center",
    marginTop: 10,
  },
  slogan1: {
    fontSize: 17,
    textAlign: "center",
    width: 270,
    height: 100,
    color: "#A1A1A1",
  },
  slogan2: {
    fontSize: 15,
    textAlign: "center",
    marginLeft: 30,
    marginRight: 30,
  },
  slogan3: {
    fontSize: 15,
    textAlign: "center",
    marginLeft: 15,
    marginRight: 15,
  },
  image: {
    marginLeft: 10,
    marginRight: 10,
  },
  containdots: {
    marginTop: 15,
    marginBottom: 25,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  dot: {
    marginLeft: 6,
    marginRight: 6,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    height: 52,
    backgroundColor: "#18A0FB",
    display: "flex",
    flexDirection: "row",
    borderRadius: 41,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },

  container2: {
    alignItems: "center",
    justifyContent:"center",
  },

  logo: {
    width: "100%",
    resizeMode: "contain",
    marginTop: 40,
  },

  button: {
    width: "90%",
    height: 45,
    backgroundColor: "#C84771",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  thanhText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
});