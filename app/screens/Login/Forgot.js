import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { ImageBackground } from "react-native";
import { Image, StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Alert, Linking } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const Login = ({ navigation }) => {
  const handleLogin = () => {
    return navigation.navigate('Login');
  };

  return (
    <>
    <View style = {styles.container}>

      <View style = {styles.container1}>
        <TouchableOpacity style={styles.thanh} disabled={true}>
          <View style={styles.row}>
            <Text style={styles.thanhText}>FORGOT PASSWORD</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.container2}>          
        <Image style={styles.logo} source={require("../../assets/test.png")} />
      </View>

      <View style={styles.container2}>        
      </View>

      <View style={styles.container2}>     
        <View style={styles.form}>
          <View style={styles.formcenter}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
              // onChangeText={(text) => setPassword(text)}
            />
          </View>
        </View>
      </View>

      <View style={styles.container2}>     
      </View>

      <View style = {styles.container3}></View>

      <View style={styles.content}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.thanhText}>Reset Password</Text>
        </TouchableOpacity>
      </View>    

      <View style = {styles.container3}></View>

      <View style = {styles.container3}>
        <TouchableOpacity style={styles.thanh} onPress={handleLogin}>
          <View style={styles.row}>
            <Ionicons style={styles.padd} name={"chevron-back-outline"} size={20} color={"#FFFFFF"}></Ionicons>
            <Text style={styles.thanhText}>Log in </Text>
          </View>
        </TouchableOpacity>
      </View>

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
  container1: {
    flexDirection: "row",
    paddingTop: 40,
    justifyContent: "center",
  },
  container3: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "center",
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  thanh: {
    width: "100%",
    height: 55,
    backgroundColor: "#C84771",
    alignItems: "center",
    justifyContent: "center",
  },
  thanhText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  padd: {
    paddingEnd: 12,
  },
  container2: {
    alignItems: "center",
    justifyContent:"center",
  },

  container4: {
    width: '90%',
    alignItems: "center",
    justifyContent:"center",
  },

  logo: {
    width: "100%",
    resizeMode: "contain",
  },

  logo1: {
    resizeMode: "contain",
  },

  logocenter: {
    resizeMode: "contain",
    marginLeft: 40,
    marginRight: 40,
  },

  content: {
    flexDirection: "row",
    justifyContent: "center", // can giua theo truc y
    alignItems: "center", // can giua theo truc x

  },

  form: {
    justifyContent: "space-between",
    width: "100%",
  },

  formcenter: {
    alignItems: "center",
  },

  form1: {
    width: "100%",
  },
  
  input: {
    width: "90%",
    height: 50,
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: '#C7C7CC',
    borderWidth: 1,
    padding: 10,
  },
  
  button: {
    width: "90%",
    height: 45,
    backgroundColor: "#C84771",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },

  caption: {
    color: 'black',
    fontWeight: "bold",
    textAlign: 'right',
    marginRight: 19,
  },

});

export default Login;