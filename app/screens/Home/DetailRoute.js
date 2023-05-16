import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { Tab, TabView } from "@rneui/themed";
import Ionicons from "react-native-vector-icons/Ionicons";
import axios from "axios";
import MapView from "react-native-maps";

const BUSROUTEDETAILS = "http://apicms.ebms.vn/businfo/getroutebyid";
const BUSROUTEGETVAR = "http://apicms.ebms.vn/businfo/getvarsbyroute";
const BUSROUTEGETBUSSTOP = "http://apicms.ebms.vn/businfo/getstopsbyvar";

const route1 = {
  RouteId: 0,
  RouteNo: "0",
  RouteName: "",
  Color: "",
  Type: "",
  Distance: 0,
  Orgs: "",
  TimeOfTrip: "",
  Headway: "",
  OperationTime: "",
  NumOfSeats: "",
  OutBoundName: "",
  InBoundName: "",
  OutBoundDescription:
    "",
  InBoundDescription:
    "",
  TotalTrip: "",
  Tickets:
    "",
};

async function getroutedetails(route) {
  try {
    const response = await axios.get(BUSROUTEDETAILS + "/" + route);
    return response.data;
  } catch (error) {
    console.error("getroutedetails");
    throw error;
  }
}

async function getroutevar(route) {
  try {
    const response = await axios.get(BUSROUTEGETVAR + "/" + route);
    return response.data;
  } catch (error) {
    console.error("getroutevar");
    throw error;
  }
}

async function getroutebusstop(route, varid) {
  try {
    console.log(BUSROUTEGETBUSSTOP + "/" + route + "/" + varid);
    const response = await axios.get(
      BUSROUTEGETBUSSTOP + "/" + route + "/" + varid
    );
    return response.data;
  } catch (error) {
    console.error("getroutebusstop");
    throw error;
  }
}

export default function DetailRoute({ navigation, route }) {
  const { data } = route.params;
  const [routedetails, setroutedetails] = useState(route1);
  const [routebusstop1, setroutebusstop1] = useState([]);
  const [routebusstop2, setroutebusstop2] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data1 = await getroutedetails(data.RouteId);
      setroutedetails(data1);
      const data2 = await getroutevar(data.RouteId).then(async (data6) => {
        const data3 = await getroutebusstop(data.RouteId, data6[0].RouteVarId);
        const data4 = await getroutebusstop(data.RouteId, data6[1].RouteVarId);
        setroutebusstop1(data3);
        setroutebusstop2(data4);
      });
    }
    fetchData();
  }, []);

  const [index, setIndex] = React.useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
      <MapView style={styles.map} />
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
            <ScrollView>
              <View style={styles.body_details}>
                <Text style={{ fontSize: 24, fontWeight: 500 }}>
                  Tuyến số: {routedetails.RouteNo}
                </Text>
                <Text style={{ fontSize: 16, color: "#83818E" }}>
                  Tên tuyến: {routedetails.RouteName}
                </Text>
                <Text style={{ fontSize: 16, color: "#83818E" }}>
                  Loại: {routedetails.Type}
                </Text>
                <Text style={{ fontSize: 16, color: "#83818E" }}>
                  Thuộc về: {routedetails.Orgs.replace("<br/>", "")}
                </Text>
                <Text style={{ fontSize: 16, color: "#83818E" }}>
                  Giờ hoạt động: {routedetails.OperationTime}
                </Text>
                <Text style={{ fontSize: 16, color: "#83818E" }}>
                  Số chuyến một ngày:{" "}
                  {routedetails.TotalTrip.replace(" [TPD]", "")}
                </Text>
                <Text style={{ fontSize: 16, color: "#83818E" }}>
                  Giá vé:{" "}
                  {routedetails.Tickets.replaceAll(
                    "<br/>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp",
                    ""
                  )}
                </Text>
              </View>
            </ScrollView>
          </TabView.Item>
          <TabView.Item style={{ width: "100%" }}>
            <ScrollView>
              <View style={{ flex: 1 }}>
                {routebusstop1.map((route) => {
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
                        <Ionicons name="pin" size={17} color="#000" />
                      </View>
                      <View>
                        <View style={{ flexDirection: "row" }}>
                          <Text>Tên bến: </Text>
                          <Text style={{ width: "70%" }}>{route.Name}</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                          <Text style={{ width: "90%" }}>
                            {route.AddressNo}, {route.Street}, {route.Zone}
                          </Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                          <Text>Các tuyến: </Text>
                          <Text style={{ width: "70%" }}>{route.Routes}</Text>
                        </View>
                      </View>
                    </View>
                  );
                })}
              </View>
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
