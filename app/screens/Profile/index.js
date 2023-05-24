import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { Component } from "react";

import AccountScreen from "./Account";
import LanguageScreen from "./Language";
import NotificationScreen from "./Notification";
import LocationScreen from "./Location";
import ProfileScreen from "./Profile";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const ProfileStack = createNativeStackNavigator();

export default function Profile() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />

      <ProfileStack.Screen
        name="Account"
        component={AccountScreen}
        options={{ headerShown: false }}
      />

      <ProfileStack.Screen
        name="Language"
        component={LanguageScreen}
        options={{ headerShown: false }}
      />

      <ProfileStack.Screen
        name="Notification"
        component={NotificationScreen}
        options={{ headerShown: false }}
      />

      <ProfileStack.Screen
        name="Location"
        component={LocationScreen}
        options={{ headerShown: false }}
      />
    </ProfileStack.Navigator>
  );
}
