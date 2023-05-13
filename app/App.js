import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "./screens/Home";
import Podcast from "./screens/Podcast";
import Profile from "./screens/Profile";
import Purchase from "./screens/Purchase";
import Tasks from "./screens/Tasks";

const Tab = createBottomTabNavigator();

function Screen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Tasks") {
            iconName = focused ? "checkbox" : "checkbox-outline";
          } else if (route.name === "Podcast") {
            iconName = focused ? "play-circle" : "play-circle-outline";
          } else if (route.name === "Purchase") {
            iconName = focused ? "cart" : "cart-outline";
          } else if (route.name === "Profile") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          }
          return (
            <>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Ionicons name={iconName} color={color} size={size} />
              </View>
            </>
          );
        },
        tabBarInactiveTintColor: "black",
        tabBarActiveTintColor: "#C84771",
        tabBarStyle: {
          height: 80,
          paddingBottom: 16,
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Tasks" component={Tasks} />
      <Tab.Screen name="Podcast" component={Podcast} />
      <Tab.Screen name="Purchase" component={Purchase} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

const AppStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        {/* <HistoryStack.Screen
        name="LoginStack"
        component={LoginStackScreen}
        options={{ headerShown: false }}
      /> */}
        <AppStack.Screen
          name="Main"
          component={Screen}
          options={{ headerShown: false }}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
