import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useEffect, useState, useRef } from "react";
import { Tab, TabView } from "@rneui/themed";
import Ionicons from "react-native-vector-icons/Ionicons";
import axios from "axios";
let cheerio = require("cheerio");
import { parse } from "node-html-parser";
import MapViewDirections from "react-native-maps-directions";
import MapView, { LatLng, Marker, PROVIDER_GOOGLE } from "react-native-maps";

const GOOGLE_API_KEY = "AIzaSyD4yOJN6fpG63P-VUkSMfaEy1FG0otigNY";

export default function Findaway({ navigation, route }) {
  const [busway, setbusway] = useState([]);
  const mapRef = useRef(null);
  const { way, origin, destination } = route.params;

  const { width, height } = Dimensions.get("window");
  const ASPECT_RATIO = width / height;
  const LATITUDE_DELTA = 0.02;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
  const INITIAL_POSITION = {
    // ĐH Bách Khoa TP HCM
    latitude: origin.latitude,
    longitude: origin.longitude,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  };
  const [index, setIndex] = React.useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <MapView
          ref={mapRef}
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={INITIAL_POSITION}
        >
          <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={GOOGLE_API_KEY}
            strokeColor="#6644ff"
            strokeWidth={4}
          />
        </MapView>
      </View>
      <View style={styles.body}>
        <Tab value={index} onChange={(e) => setIndex(e)}>
          <Tab.Item title="Details" />
          <Tab.Item title="Stop station" />
        </Tab>
        <TabView
          value={index}
          onChange={setIndex}
          animationType="spring"
          style={{ backgroundColor: "white" }}
        >
          <TabView.Item style={{ width: "100%" }}>
            <ScrollView style={{ margin: 16 }}>
              <View style={{ marginBottom: 16 }}>
                <Text style={{ color: "blue", fontSize: 24 }}>
                  Thông tin bên lề
                </Text>
                <Text style={{ fontSize: 20, color: "#C7C5CD" }}>
                  {way.Desc}
                </Text>
              </View>
              <View style={{}}>
                <Text style={{ color: "green", fontSize: 24 }}>
                  Thông tin chuyến đi
                </Text>
                <Text style={{ fontSize: 20, color: "#C7C5CD" }}>
                  {way.Title}
                </Text>
              </View>
            </ScrollView>
          </TabView.Item>
          <TabView.Item style={{ width: "100%" }}>
            <ScrollView>
              {way.detail.map((wayitem) => {
                return (
                  <View
                    style={{
                      margin: 16,
                      marginBottom: 0,
                      backgroundColor: "white",
                      padding: 16,
                      borderRadius: 20,
                      borderColor: "#F4F3F5",
                      borderWidth: 1,
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: "#C5DCFA",
                        padding: 16,
                        borderRadius: 20,
                        width: 48,
                        marginEnd: 16,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Ionicons
                        name={() => {
                          if (wayitem.detail) {
                            return "pin";
                          } else return "walk";
                        }}
                        size={17}
                        color="#000"
                      />
                    </View>
                    <View>
                      <View style={{ flexDirection: "row" }}>
                        <Text>Bắt đầu: </Text>
                        <Text style={{ width: "70%" }}>{wayitem.GetIn}</Text>
                      </View>
                      <View style={{ flexDirection: "row" }}>
                        <Text>Tuyến xe: </Text>
                        <Text style={{ width: "90%" }}>{wayitem.RouteNo}</Text>
                      </View>
                      <View style={{ flexDirection: "row" }}>
                        <Text>Kết thúc: </Text>
                        <Text style={{ width: "70%" }}>{wayitem.GetOff}</Text>
                      </View>
                    </View>
                  </View>
                );
              })}
            </ScrollView>
          </TabView.Item>
        </TabView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  body: {
    flex: 1,
    height: "50%",
    backgroundColor: "white",
    borderTopColor: "#F4F3F5",
    borderTopWidth: 1,
  },

  body_details: {
    padding: 16,
  },

  map: {
    width: "100%",
    height: "100%",
  },
});
