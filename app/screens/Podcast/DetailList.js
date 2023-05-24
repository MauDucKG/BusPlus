import {
  SafeAreaView,
  Image,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function PodCastScreen({ navigation }) {
 

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/p2.png")} />

      <View style={styles.top}>
        <Text style={styles.trend}>Đắp chăn nằm ngủ</Text>
      </View>
      <View style={styles.top1}>
        <Text style={styles.name}>Tun nằm ngủ</Text>
      </View>
      <View style={styles.top1}>
        <Text style={styles.nameB}>About</Text>
        <Text style={styles.name}>Đắp Chăn Nằm Nghe Tun Kể là series podcast đầu tiên của Tun, nơi Tun và các bạn có thể trải lòng với nhau về những điều mệt mỏi trong cuộc sống, cùng cho nhau những lời khuyên hay ho, cùng chữa lành những tổn thương, đ... see more</Text>
      </View>
      
      <View style={styles.top1}>
        <Text style={styles.nameB}>All Episodes</Text>
      </View>

        <TouchableOpacity onPress={() => navigation.navigate("Detail")} style={styles.top2}>
          <Image style={styles.logo1} source={require("../../assets/p2.png")} />
          <View>
            <Text style={styles.nameB}>Đắp chăn nằm ngủ | Đừng nghĩ nhiều làm gì</Text>
            <Text style={styles.name}>Đắp chăn nằm ngủ | Đừng nghĩ nhiều làm gì</Text>
          </View>
        </TouchableOpacity>
         

        

      

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  searchSection: {
    position: "absolute",
    top: 16 + StatusBar.currentHeight,
    left: 16,
    right: 16,
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
    marginTop: 10,
  },
  searchIcon: {
    padding: 10,
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
  tagContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  tagButton: {
    backgroundColor: "#F4F3F5",
    borderRadius: 17,
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginHorizontal: 5,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  tagButtonChoice: {
    width: 100,
    backgroundColor: "#FDE1EB",
    borderRadius: 17,
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginHorizontal: 5,
  },
  tagChoice: {
    color: "#C84771",
  },
  tagText: {
    color: "black",
  },        
  top: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  top1: {
    marginTop: 12,
    left: 10,
  },
  top2: {
    width: "100%",
    left: 10,
    flexDirection: "row",
  },
  trend: {
    fontWeight: "bold",
    fontSize: 25,
  },
  name: {
    fontSize: 18,
  },
  nameB: {
    fontSize: 22,
    fontWeight: "bold",
  },
  podcast: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  trendingContainer: {
    marginTop: 20,
    flexDirection: "row",
  },
  trendingColumn: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  logo: {
    width: "100%",
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center",
  },
  logo1: {
    width: "30%",
    resizeMode: "contain",
  },
  
});
