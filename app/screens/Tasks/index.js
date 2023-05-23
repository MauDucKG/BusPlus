import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Today from "./Today";
import Add from "./Add";
import Edit from "./Edit";

const TaskStack = createNativeStackNavigator();

export default function Tasks() {
  return (
    <TaskStack.Navigator>
      <TaskStack.Screen
        name="Today"
        component={Today}
        options={{
          headerShown: false,
        }}
      />
      <TaskStack.Screen name="New task" component={Add} />
      <TaskStack.Screen name="Edit task" component={Edit} />
    </TaskStack.Navigator>
  );
}
