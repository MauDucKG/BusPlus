import { View, Text } from "react-native";
import React from "react";
import PodCast from "./PodCastScreen";
import List from "./DetailList";
import Detail from "./Detail";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const PodCastStack = createNativeStackNavigator();

export default function Podcast() {
  return (
    <PodCastStack.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <PodCastStack.Screen
        name="PodCast"
        component={PodCast}
        options={{
          headerShown: false,
        }}
      />

      <PodCastStack.Screen
        name="Detail"
        component={Detail}
      />

      <PodCastStack.Screen
        name="List"
        component={List}
      />
    </PodCastStack.Navigator>
  );
}
