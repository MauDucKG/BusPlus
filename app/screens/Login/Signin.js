import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { ImageBackground } from "react-native";
import { Image, StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Alert, Linking } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const Login = ({ navigation }) => {
  const handleLogin = () => {
    return navigation.navigate('Main');
  };

  const create = () => {
    return navigation.navigate('Signup');
  };

  const handleForgot = () => {
    return navigation.navigate('Forgot')
  };

  return (
    <>
    <View style = {styles.container}>

      <View style = {styles.container1}>
        <TouchableOpacity style={styles.thanh} onPress={handleLogin}>
          <View style={styles.row}>
            <Text style={styles.thanhText}>Welcome to BusPlus as a guest</Text>
            <Ionicons style={styles.padd} name={"chevron-forward-outline"} size={20} color={"#FFFFFF"}></Ionicons>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.container2}>          
        <Image style={styles.logo} source={require("../../assets/test.png")} />
      </View>

      <View style={styles.container2}>        
        <View style={styles.form}>
          <View style={styles.formcenter}>
            <TextInput
              style={styles.input}
              placeholder="Username"
              // onChangeText={(text) => setUsername(text)}
            />
          </View>
        </View>
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
          <View style={styles.captionContainer}>
            <TouchableOpacity onPress={handleForgot}>
              <View>
                <Text style={styles.caption}>Forgot Password</Text>
              </View>
            </TouchableOpacity>    
          </View>
        </View>
      </View>

      <View style = {styles.container3}></View>

      <View style={styles.content}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.thanhText}>Welcome to BusPlus</Text>
        </TouchableOpacity>
      </View>    

      <View style = {styles.container3}>
        <Image style={styles.logo1} source={require("../../assets/fb.png")} />
        <Image style={styles.logocenter} source={require("../../assets/mail.png")} />
        <Image style={styles.logo1} source={require("../../assets/dt.png")} />
      </View>


      <View style = {styles.container3}>
        <TouchableOpacity style={styles.thanh} onPress={create}>
          <View style={styles.row}>
            <Text style={styles.thanhText}>Create Account</Text>
            <Ionicons style={styles.padd} name={"chevron-forward-outline"} size={20} color={"#FFFFFF"}></Ionicons>
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
    paddingStart: 12,
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