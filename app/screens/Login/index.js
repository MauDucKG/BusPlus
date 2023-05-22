import { View, Text } from "react-native";
import React from "react";
import LoginScreen from "./Signin";
import SignupScreen from "./Signup";
import ForgotScreen from "./Forgot";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const LoginStack = createNativeStackNavigator();

export default function Login() {
  return (
    <LoginStack.Navigator>
        <LoginStack.Screen
            name="Login"
            component={LoginScreen}
            options={{
            headerShown: false,
            }}
        />

        <LoginStack.Screen
            name="Signup"
            component={SignupScreen}
            options={{ headerShown: false }}
        />

        <LoginStack.Screen
            name="Forgot"
            component={ForgotScreen}
            options={{ headerShown: false }}
        />
    </LoginStack.Navigator>
  );
}
