import { View, Text } from "react-native";
import React from "react";
import HomeScreen from "./HomeScreen";
import Routes from "./Routes";
import DetailRoute from "./DetailRoute";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const HomeStack = createNativeStackNavigator();

export default function Home() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />

      <HomeStack.Screen name="Routes" component={Routes} />
      <HomeStack.Screen name="DetailRoute" component={DetailRoute} />
    </HomeStack.Navigator>
  );
}
