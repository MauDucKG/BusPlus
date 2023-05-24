import {
  View,
  Text,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Profile() {
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
            <FontAwesomeIcon icon={faAddressCard} size={30} color="#5856D6" />
            <Text style={{ fontSize: 18, marginLeft: 10 }}>Account</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
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
            <FontAwesomeIcon icon={faBell} size={30} color="#FF9500" />
            <Text style={{ fontSize: 18, marginLeft: 10 }}>Notification</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
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

        <TouchableOpacity>
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
}
