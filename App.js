import { Text, Platform, View } from "react-native";
import {
  Settings,
  CreareProfessor,
  Listing,
  ListingNavigation,
} from "./src/screen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
// import { openDatabaseConnection } from "./src/operations/dbConnect";
import * as SQLite from "expo-sqlite";
import { useEffect } from "react";

// Thanks for watching
const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    background: "#fff",
  },
};
export default function App() {
  

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="Listing"
          component={ListingNavigation}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Entypo
                    name="home"
                    size={24}
                    color={focused ? "#16247d" : "#111"}
                  />
                  <Text style={{ fontSize: 12, color: "#16247d" }}>HOME</Text>
                </View>
              );
            },
          }}
        />

        <Tab.Screen
          name="new"
          component={CreareProfessor}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#16247d",
                    width: Platform.OS == "ios" ? 50 : 60,
                    height: Platform.OS == "ios" ? 50 : 60,
                    top: Platform.OS == "ios" ? -10 : -20,
                    borderRadius: Platform.OS == "ios" ? 25 : 30,
                  }}
                >
                  <FontAwesome name="plus-circle" size={24} color="#fff" />
                </View>
              );
            },
          }}
        />

        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Ionicons
                    name="settings"
                    size={24}
                    color={focused ? "#16247d" : "#111"}
                  />
                  <Text style={{ fontSize: 12, color: "#16247d" }}>
                    SETTINGS
                  </Text>
                </View>
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
