import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Tab, TabView } from "@rneui/themed";

import React, { useEffect, useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import axios from "axios";

const BUSROUTEAPI = "http://apicms.ebms.vn/businfo/getallroute";

async function getallroute() {
  try {
    const response = await axios.get(BUSROUTEAPI);
    return response.data;
  } catch (error) {
    console.error("getallroute");
    throw error;
  }
}

const BusRoute = ({ route, navigation }) => {
  const data = route;
  return (
    <View style={styles.route_item}>
      <View>
        <View style={styles.route_item_head}>
          <Ionicons style={styles.busicon} name="bus" size={51} color="#000" />
          <View style={styles.route_item_head_text}>
            <Text style={styles.route_item_head_title}>
              Bus route {route.RouteNo}
            </Text>
            <Text style={styles.route_item_head_body}>{route.RouteName}</Text>
            <Text style={styles.route_item_head_body_red}>Chưa thanh toán</Text>
          </View>
        </View>
      </View>
      <View style={styles.route_item_foot}>
        <TouchableOpacity
          style={styles.route_item_foot_part}
          onPress={() => {
            navigation.navigate("Checkout",{data});
          }}
        >
          <Text style={styles.route_item_foot_text}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

function removeVietnameseTones(str) {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
  str = str.replace(/Đ/g, "D");
  // Some system encode vietnamese combining accent as individual utf-8 characters
  // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
  str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
  // Remove extra spaces
  // Bỏ các khoảng trắng liền nhau
  str = str.replace(/ + /g, " ");
  str = str.trim();
  // Remove punctuations
  // Bỏ dấu câu, kí tự đặc biệt
  str = str.replace(
    /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
    " "
  );
  return str;
}

export default function History({ navigation }) {
  const [routes, setroutes] = useState([]);
  const [searchText, onChangeSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [index, setIndex] = useState(0);

  const handle = () => {
    return navigation.navigate('order');
  };

  useEffect(() => {
    const filtered = routes.filter(
      (item) =>
        removeVietnameseTones(item.RouteName.toLowerCase()).includes(
          removeVietnameseTones(searchText.toLowerCase())
        ) || item.RouteNo.toLowerCase().includes(searchText.toLowerCase())
    );
    if (searchText === "") {
      return setFilteredData(routes);
    }

    setFilteredData(filtered);
  }, [searchText]);

  useEffect(() => {
    async function fetchData() {
      const data = await getallroute();
      setroutes(data);
      setFilteredData(data);
    }
    fetchData();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container1}>
        <Tab value={index} onChange={(e) => setIndex(e)}>
            <Tab.Item title="History" titleStyle={styles.tabTitle} />
            <Tab.Item title="Order" titleStyle={styles.tabTitle} />
            <Tab.Item title="Checkout" titleStyle={styles.tabTitle} />
        </Tab>
      </View>
        <View>
          <ScrollView>
              {filteredData.map((route, index) => {
              return (
                <BusRoute route={route} navigation={navigation} key={index} />
              );
            })}
          </ScrollView>
          {/* <TabView>
            <TabView.Item>
            <ScrollView>
              {filteredData.map((route, index) => {
              return (
                <BusRoute route={route} navigation={navigation} key={index} />
              );
            })}
          </ScrollView>
            </TabView.Item>
            <TabView.Item>
              <ScrollView>
                <Text>1</Text>
              </ScrollView>
            </TabView.Item>
          </TabView> */}
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  route_item: {
    backgroundColor: "white",
    margin: 16,
    marginTop: 0,
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
    borderRadius: 20,
    left: 10,
    width: "40%",
  },

  route_item_foot_text: {
    flexDirection: "row",
    color: "black",
    fontSize: 16,
    fontWeight: 'bold',
  },

  route_item_head: {
    flexDirection: "row",
    alignItems: "center",
    width: "60%",
  },

  route_item_head_title: {
    fontSize: 24,
    fontWeight: 500,
    color: "#BC305D",
  },

  route_item_head_text: {
    width: "100%",
  },

  route_item_head_body: {
    fontSize: 14,
  },
  route_item_head_body_red: {
    fontSize: 14,
    color: 'red',
  },

  busicon: {
    padding: 32,
  },

  route_item_foot_part: {
    width: "100%",
    padding: 12,
    alignItems: "center",
  },

  container: {
    flex: 1,
  },

  searchSection: {
    flex: 1,
    padding: 16,
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
  container1: {
    paddingTop: 30,
    alignItems: 'center',
    justifyContent: "center",
  },
  tabTitle: {
    color: "black", 
    fontSize: 15,
  },
});


