import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import React, { useState, useEffect, useRef } from "react";
import MapView, { LatLng, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import {
  GooglePlaceDetail,
  GooglePlacesAutocomplete,
} from "react-native-google-places-autocomplete";
import Constants from "expo-constants";
import MapViewDirections from "react-native-maps-directions";
import { MaterialIcons } from "@expo/vector-icons";

const GOOGLE_API_KEY = "AIzaSyD4yOJN6fpG63P-VUkSMfaEy1FG0otigNY";

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const INITIAL_POSITION = {
  // ĐH Bách Khoa TP HCM
  latitude: 10.77217249292377,
  longitude: 106.6578910710957,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
};

function InputAutocomplete({ label, placeholder = "", onPlaceSelected }) {
  return (
    <>
      <GooglePlacesAutocomplete
        styles={{ textInput: styles.input }}
        placeholder={placeholder}
        fetchDetails
        onPress={(data, details) => {
          onPlaceSelected(details);
        }}
        query={{
          key: GOOGLE_API_KEY,
          language: "pt-BR",
        }}
      />
    </>
  );
}

export default function Find({ navigation }) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [showDiretions, setShowDirections] = useState(false);
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(0);
  const mapRef = useRef(null);

  const moveTo = async (position) => {
    const camera = await mapRef.current?.getCamera();
    if (camera) {
      camera.center = position;
      mapRef.current?.animateCamera(camera, { duration: 1000 });
    }
    set(position);
    moveTo(position);
  };

  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);

  const edgePaddingValue = 10;

  const edgePadding = {
    top: edgePaddingValue,
    right: edgePaddingValue,
    bottom: edgePaddingValue,
    left: edgePaddingValue,
  };

  const traceRoute = () => {
    if (origin && destination) {
      setShowDirections(true);
      mapRef.current?.fitToCoordinates([origin, destination], { edgePadding });
    }
  };

  const onPlaceSelected = (details, flag) => {
    const set = flag === "origin" ? setOrigin : setDestination;
    const position = {
      latitude: details.geometry.location.lat || 0,
      longitude: details.geometry.location.lng || 0,
    };
    set(position);
    moveTo(position);
  };

  useEffect(() => {
    const fetchUserLocation = async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setErrorMsg("Permission to access location was denied");
          return;
        }

        const { coords } = await Location.getCurrentPositionAsync({});
        setLocation(coords);
      } catch (error) {
        console.log("Error while getting user location: ", error);
        setErrorMsg("Something went wrong while fetching location.");
      }
    };

    fetchUserLocation();
  }, []);

  const [text, onChangeText] = React.useState("Useless Text");

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={INITIAL_POSITION}
      >
        {origin && <Marker coordinate={origin} />}
        {destination && <Marker coordinate={destination} />}
        {showDiretions && origin && destination && (
          <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={GOOGLE_API_KEY}
            strokeColor="#6644ff"
            strokeWidth={4}
          />
        )}
      </MapView>

      <View style={styles.searchContainer}>
        <View style={styles.searchSection1}>
          <Ionicons
            style={styles.searchIcon}
            name="ios-search"
            size={20}
            color="#000"
          />
          <InputAutocomplete
            label="Origin:"
            placeholder="Enter origin"
            onPlaceSelected={(details) => {
              onPlaceSelected(details, "origin");
            }}
          />
        </View>

        <View style={styles.searchSection3}>
          <Ionicons
            style={styles.searchIcon}
            name="ios-search"
            size={20}
            color="#000"
          />
          <InputAutocomplete
            label="Destination:"
            placeholder="Enter destination"
            onPlaceSelected={(details) => {
              onPlaceSelected(details, "destination");
            }}
          />
        </View>

        <View style={styles.button}>
          <TouchableOpacity style={styles.button1} onPress={traceRoute}>
            <Text style={styles.buttonText}>Find the way</Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={34}
              color="#BC305D"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  searchContainer: {
    position: "absolute",
    width: "95%",
    shadowRadius: 4,
    borderRadius: 8,
    top: 8,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  searchSection1: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 8,
    width: "100%",
    borderColor: "#F5C0D2",
    backgroundColor: "white",
  },
  searchSection3: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 8,
    width: "100%",
    borderColor: "#F5C0D2",
    backgroundColor: "white",
  },
  input: {
    flex: 1,
    borderColor: "#888",
  },
  button: {
    position: "relative",
    top: 8,
    backgroundColor: "#F5C0D2",
    height: 44,
    width: 170,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  button1: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    textAlign: "center",
    color: "#BC305D",
  },
  searchIcon: {
    padding: 10,
  },

  searchIcon_lookup: {
    paddingBottom: 5,
    paddingTop: 13,
  },
});
