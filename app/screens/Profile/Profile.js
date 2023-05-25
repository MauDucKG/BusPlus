import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { Component } from "react";
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons } from "@expo/vector-icons";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Profile = ({ navigation }) => {
  const handleLogOut = () => {
    return navigation.navigate("LoginS");
  };

  const handleProfile = () => {
    return navigation.navigate("ProfileS");
  };

  const handleAccount = () => {
    return navigation.navigate("Account");
  };

  const handleLanguage = () => {
    return navigation.navigate("Language");
  };

  const handleNotification = () => {
    return navigation.navigate("Notification");
  };

  const handleLocation = () => {
    return navigation.navigate("Location");
  };

  const handleImageSelection = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.mediaTypesOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            marginTop: 35,
            width: "100%",
            height: 200,
          }}
        >
          <Image
            source={require("../../assets/architecture.jpg")}
            style={{
              width: "100%",
              height: 180,
            }}
          ></Image>
          <TouchableOpacity onPress={handleImageSelection}>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                bottom: 5,
                right: 5,
                backgroundColor: "white",
                borderRadius: 50,
                height: 28,
                width: 28,
              }}
            >
              <MaterialIcons name="photo-camera" size={24} color="grey" />
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../../assets/avatar.jpg")}
            style={{
              width: 100,
              height: 100,
              borderRadius: 100,
              marginTop: -80,
            }}
          ></Image>
          <TouchableOpacity onPress={handleImageSelection}>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                bottom: 0,
                right: -50,
                zIndex: 9999,
                backgroundColor: "white",
                borderRadius: 50,
                height: 28,
                width: 28,
              }}
            >
              <MaterialIcons name="photo-camera" size={24} color="grey" />
            </View>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              padding: 5,
              color: "grey",
            }}
          >
            @alice
          </Text>
        </View>

        <TouchableOpacity onPress={handleAccount}>
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
            <FontAwesomeIcon icon={faAddressCard} size={30} color="#5856D6" />
            <Text style={{ fontSize: 18, marginLeft: 10 }}>Account</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleLanguage}>
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              backgroundColor: "#fff",
              width: "90%",
              padding: 20,
              borderRadius: 10,
              marginHorizontal: 20,
            }}
          >
            <FontAwesomeIcon icon={faGlobe} size={30} color="#34C759" />
            <Text style={{ fontSize: 18, marginLeft: 10 }}>Language</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleNotification}>
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
            <FontAwesomeIcon icon={faBell} size={30} color="#FF9500" />
            <Text style={{ fontSize: 18, marginLeft: 10 }}>Notification</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleLocation}>
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              backgroundColor: "#fff",
              width: "90%",
              padding: 20,
              borderRadius: 10,
              marginHorizontal: 20,
              marginBottom: 20,
            }}
          >
            <FontAwesomeIcon icon={faLocationDot} size={30} color="#000000" />
            <Text style={{ fontSize: 18, marginLeft: 10 }}>Location</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleLogOut}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              backgroundColor: "#fff",
              width: "90%",
              padding: 20,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "#C84771",
              margin: 20,
            }}
          >
            <Text style={{ fontSize: 18, marginLeft: 10, color: "#C84771" }}>
              Log Out
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
export default Profile;
