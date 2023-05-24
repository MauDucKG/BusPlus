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
import { RadioGroup, RadioButton } from 'react-native-elements';
import React, { useState, useEffect } from "react";
import MapView from "react-native-maps";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Checkout({ navigation }) {
  const handle = () => {
    return navigation.navigate('QRCode');
  };
  const [selectedOption, setSelectedOption] = useState('option1');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container1}>
        <TouchableOpacity
          style={styles.radioButtonMomo}
          onPress={() => handleOptionSelect('option1')}
        >
          <View style={styles.icon1}>
            <Image style={styles.logo} source={require("../../assets/payment3.png")} />
          </View>
          <View>
            <Text style={styles.text}>Momo QR</Text>
          </View>
          <View style={styles.icon3}>
            <Ionicons
              name={selectedOption === 'option1' ? 'radio-button-on-outline' : 'radio-button-off-outline'}
              size={24}
              color="#000"
              style={styles.icon}
            />
          </View>
          
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.radioButtonVnpay}
          onPress={() => handleOptionSelect('option2')}
        >
          <View style={styles.icon1}>
            <Image style={styles.logo} source={require("../../assets/payment2.png")} />
          </View>
          <View>
            <Text style={styles.text}>VNPay QR</Text>
          </View>
          <View style={styles.icon3}>
            <Ionicons
              name={selectedOption === 'option2' ? 'radio-button-on-outline' : 'radio-button-off-outline'}
              size={24}
              color="#000"
              style={styles.icon}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.radioButtonZalo}
          onPress={() => handleOptionSelect('option3')}
        >
          <View style={styles.icon1}>
            <Image style={styles.logo} source={require("../../assets/payment1.png")} />
          </View>
          <View>
            <Text style={styles.text}>VNPay QR</Text>
          </View>
          <View style={styles.icon3}>
            <Ionicons
              name={selectedOption === 'option3' ? 'radio-button-on-outline' : 'radio-button-off-outline'}
              size={24}
              color="#000"
              style={styles.icon}
            />
          </View>
        </TouchableOpacity>
      </View>
      
      <View style={styles.container1}>
        <TouchableOpacity style={styles.button} onPress={handle}>
          <Text style={styles.thanhText}>Accept</Text>
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
    paddingTop: 15,
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
    radioButtonZalo: {
      width: "85%",
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 15,
      height: 55,
      backgroundColor: "#D9F6E5",
      borderRadius: 20,
      justifyContent: "space-between",

    },

    radioButtonMomo: {
      width: "85%",
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 5,
      height: 55,
      backgroundColor: "#FDE1EB",
      borderRadius: 20,
      justifyContent: "space-between",

    },

    radioButtonVnpay: {
      width: "85%",
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 15,
      height: 55,
      backgroundColor: "#BCE0FB",
      borderRadius: 20,
      justifyContent: "space-between",

    },
    icon1: {
      marginLeft: 25,
    },
    icon3: {
      marginRight: 25,
    },
    text: {
      fontSize: 16,
    },
});
