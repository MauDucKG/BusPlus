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

export default function History({ navigation }) {
  const [index, setIndex] = React.useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container1}>
        <Tab value={index} onChange={(e) => setIndex(e)}>
            <Tab.Item title="History" titleStyle={styles.tabTitle} />
            <Tab.Item title="Order" titleStyle={styles.tabTitle} />
            <Tab.Item title="Checkout" titleStyle={styles.tabTitle} />
        </Tab>

        <TabView
          value={index}
          onChange={setIndex}
          animationType="spring"
          style={{ backgroundColor: "white" }}
        >
          <TabView.Item>
            <Text style={styles.font}>1</Text>
          </TabView.Item>
          <TabView.Item title="Order">
            <Text>2</Text>
          </TabView.Item>
          <TabView.Item>
            <Text>3</Text>
          </TabView.Item>
        </TabView>
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
  font: {
    paddingTop:100,
  },

  input: {
    flex: 1,
  },
  container1: {
    paddingTop: 30,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "center",
  },
  tabTitle: {
    color: "black", 
    fontSize: 15,
  },
});
