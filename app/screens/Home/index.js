import { View, Text } from "react-native";
import React from "react";
import HomeScreen from "./HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const HomeStack = createNativeStackNavigator()

export default function Home() {
  return (
      <HomeStack.Navigator screenOptions={{ headerShown: false }}>
        <HomeStack.Screen name="Home" component={HomeScreen} />
        {/* <HomeStack.Screen name="Details" component={DetailDoor} />
        <HomeStack.Screen name="Add" component={NewDoor} />
        <HomeStack.Screen name="Edit" component={EditDoor} /> */}
      </HomeStack.Navigator>
  );
}
