import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Today from "./Today";

const TaskStack = createNativeStackNavigator();

export default function Tasks() {
  return <TaskStack.Navigator>
    <TaskStack.Screen
        name="Today"
        component={Today}
        options={{
          headerShown: false,
        }}
      />
  </TaskStack.Navigator>;
}

