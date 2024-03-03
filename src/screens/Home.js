import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "../components/Card";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NewProduct from "./NewProduct";
import Listing from "./Listing";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../configs/colors";
import NewAddButton from "./NewAddButton";
import ListingNavigation from "./ListingNavigation";

const BottomTab = createBottomTabNavigator();
const TabNav = () => (
  <BottomTab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: colors.secondary,
    }}
  >
    <BottomTab.Screen
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
        headerShown: false,
      }}
      name="Listing"
      component={ListingNavigation}
    />
    <BottomTab.Screen
      options={({ navigation }) => ({
        tabBarButton: () => (
          <NewAddButton onPress={() => navigation.navigate("New")} />
        ),
        headerShown: false,
      })}
      name="New"
      component={NewProduct}
    />
  </BottomTab.Navigator>
);

export default function Home() {
  return <TabNav />;
}
