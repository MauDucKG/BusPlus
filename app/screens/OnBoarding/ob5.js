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
// import LottieView from 'lottie-react-native';

export default WelcomeScreen = ({ navigation }) => {
  const progress = useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.container}>
      <View style={styles.container2}>          
        <Image style={styles.logo} source={require("../../assets/test3.png")} />
      </View>
      {/* <View style={{height: 300, width: 300}}>
        <LottieView
          autoPlay
          progress={progress}
          source={require('../assets/lottie/man-running.json')}
        />
      </View> */}

    <View style={styles.container1}>  
      <View style={styles.container2}>  
        <StatusBar style="auto" />

        <View style={styles.containdots}>
          <TouchableOpacity
            onPress={() => navigation.navigate("ob3", { name: "ob3" })}
          >
            <Image
              style={styles.dot}
              source={require("../../assets/dot.png")}
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
              source={require("../../assets/dot1.png")}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.container2}>          
        <Text style={styles.welcome}>Book & Pay Tickets Online</Text>
      </View>

      <View style={styles.container2}>          
        <Text style={styles.slogan1}>
          With our app, you can book tickets online for the bus route you want to take.
        </Text>
      </View>
      
      <View style={styles.container2}>          
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("LoginS", { name: "LoginS" })}
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
    width: 170,
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