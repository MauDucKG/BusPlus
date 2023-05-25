import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { ImageBackground } from "react-native";
import { Image, StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Alert, Linking } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as api from '../../api/api.js';
import LottieView from 'lottie-react-native';


import { AuthContext } from '../../context/AuthContext.js';


const Login = ({ navigation }) => {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const { updateToken } = useContext(AuthContext)
  const handleSignUp = async() => {
    res = await api.post({url:"api/v1/users/register",
                                data: `username=${username}&password=${password}`});
                                
    // console.log(res);
    updateToken(res.token);
    navigation.navigate('Login');
  }

  const create = () => {
    return navigation.navigate('Signup');
  };

  return (
    <>
    <View style = {styles.container}>

      <View style = {styles.container1}>
        <TouchableOpacity style={styles.thanh} disabled={true}>
          <View style={styles.row}>
            <Text style={styles.thanhText}>SIGN UP</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{height: 375, width: 375}}>
        <LottieView
          source={require('../../assets/bus-ticket.json')}
          autoPlay
          loop
        />
      </View>

      <View style={styles.container2}>        
        <View style={styles.form}>
          <View style={styles.formcenter}>
            <TextInput
              style={styles.input}
              placeholder="Username"
              // onChangeText={(text) => setUsername(text)}
              onChangeText={(value) => setUsername(value)}
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
              onChangeText={(value) => setPassword(value)}
            />
          </View>
        </View>
      </View>

      <View style={styles.container2}>     
        <View style={styles.form}>
          <View style={styles.formcenter}>
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              secureTextEntry={true}
              // onChangeText={(text) => setPassword(text)}
            />
          </View>
        </View>
      </View>

      <View style = {styles.container3}></View>

      <View style={styles.content}>
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.thanhText}>Sign up</Text>
        </TouchableOpacity>
      </View>    

      <View style = {styles.container3}></View>

      <View style = {styles.container3}>
        <TouchableOpacity style={styles.thanh} onPress={handleSignUp}>
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