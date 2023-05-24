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
import Login from "./screens/Login";
import OnBoarding from "./screens/OnBoarding";

const Tab = createBottomTabNavigator();
const createS = createNativeStackNavigator();
function LoginStackScreen() {
  return (
    <createS.Navigator screenOptions={{ headerShown: false }}>
      <createS.Screen name="Onboard" component={OnBoarding} />
      <createS.Screen name="LoginS" component={Login} />
      <createS.Screen name="Main" component={Screen} />
    </createS.Navigator>
  );
}

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
        headerShown: false,
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
        {/* <AppStack.Screen
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
