import { View, Text } from "react-native";
import React from "react";
import ob1 from "./ob1";
import ob2 from "./ob2";
import ob3 from "./ob3";
import ob4 from "./ob4";
import ob5 from "./ob5";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const OnboardingStack = createNativeStackNavigator();

export default function Login() {
  return (
    <OnboardingStack.Navigator>
        <OnboardingStack.Screen
            name="ob1"
            component={ob1}
            options={{
            headerShown: false,
            }}
        />

        <OnboardingStack.Screen
            name="ob2"
            component={ob2}
            options={{
            headerShown: false,
            }}
        />

        <OnboardingStack.Screen
            name="ob3"
            component={ob3}
            options={{
            headerShown: false,
            }}
        />

        <OnboardingStack.Screen
            name="ob4"
            component={ob4}
            options={{
            headerShown: false,
            }}
        />

        <OnboardingStack.Screen
            name="ob5"
            component={ob5}
            options={{
            headerShown: false,
            }}
        />
    </OnboardingStack.Navigator>
  );
}
