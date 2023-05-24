import * as React from "react";
import { useState, useEffect } from "react";
import { ImageBackground } from "react-native";
import {
  Image,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
  Linking,
  Switch,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";

const Notification = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F9F8FC" }}>
      <View
        style={{
          marginTop: 15,
          marginHorizontal: 14,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ position: "absolute", left: 5 }}
        >
          <MaterialIcons name="keyboard-arrow-left" size={34} color="grey" />
        </TouchableOpacity>

        <Text style={{ fontSize: 22 }}>Notification</Text>
      </View>

      <TouchableOpacity>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            backgroundColor: "#fff",
            width: "90%",
            padding: 20,
            borderRadius: 10,
            margin: 20,
          }}
        >
          <Text style={{ fontSize: 18, marginLeft: 10 }}>
            Mute all notifications
          </Text>
          <Switch
            style={{
              position: "absolute",
              right: 10,
              transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
            }}
            trackColor={{ false: "#767577", true: "#C84771" }}
            thumbColor={isEnabled ? "white" : "white"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Notification;
