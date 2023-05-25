import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import axios from "axios";

const BUSWAYAPI = "http://apicms.ebms.vn/pathfinding/getpathbystop/";

const BusRoute = ({ route, navigation, origin, destination }) => {
  return (
    <TouchableOpacity style={styles.route_item} onPress={() => {
        const way = route
        navigation.navigate("Find a way", {way, origin, destination})
    }}>
      <View>
        <View style={styles.route_item_head}>
          <Ionicons style={styles.busicon} name="bus" size={51} color="#000" />
          <View style={styles.route_item_head_text}>
            <Text style={styles.route_item_head_title}>
              {route.Desc}
            </Text>
            <Text style={styles.route_item_head_body}>Mô tả: {route.Title}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function Findawayall({ navigation, route }) {
  const [filteredData, setFilteredData] = useState([]);

  const { origin, destination } = route.params;
  const APItoget =
    "http://apicms.ebms.vn/pathfinding/getpathbystop/" +
    origin.latitude +
    "," +
    origin.longitude +
    "/" +
    destination.latitude +
    "," +
    destination.longitude +
    "/2";

  async function getbusway() {
    try {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: APItoget,
        headers: {},
      };

      axios.request(config).then((response) => {
        setFilteredData(response.data);
      });
    } catch (error) {
      console.error("getallroute");
      throw error;
    }
  }

  useEffect(() => {
    async function fetchData() {
      const data = await getbusway();
      //   settasks(data);
    }
    fetchData();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{alignItems: "center", justifyContent: "center", padding: 16}}>
            <Text style={{fontSize: 48, color: "#D46287"}}>Routes</Text>
        </View>
        <View>
          {filteredData.map((route, index) => {
            return (
              <BusRoute route={route} navigation={navigation} key={index} origin={origin} destination={destination}/>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  route_item: {
    backgroundColor: "white",
    margin: 16,
    marginBottom: 0,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  route_item_foot: {
    flexDirection: "row",
    backgroundColor: "#F5C0D2",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },

  route_item_foot_text: {
    flexDirection: "row",
    color: "black",
    fontSize: 16,
  },

  route_item_head: {
    flexDirection: "row",
    alignItems: "center",
    width: "60%",
  },

  route_item_head_title: {
    fontSize: 16,
    fontWeight: 500,
    color: "#248DDE",
  },

  route_item_head_text: {
    width: "100%",
  },

  route_item_head_body: {
    fontSize: 14,
  },

  busicon: {
    padding: 32,
  },

  route_item_foot_part: {
    width: "50%",
    padding: 12,
    alignItems: "center",
  },

  container: {
    flex: 1,
  },

  searchSection1: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 8,
    height: 58,
    width: "100%",
    borderColor: "#F5C0D2",
    backgroundColor: "white",
  },
  searchIcon: {
    padding: 10,
  },

  input: {
    flex: 1,
  },
});
