import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ListItem from "../components/ListItem";
import { NavigationContainer } from "@react-navigation/native";
import Card from "../components/Card";
import Listing from "./Listing";
import ListingDetail from "./ListingDetail";
import UpdateProfessor from "./UpdateProf";

const Stack = createStackNavigator();
const StackListingDetails = () => (
  <Stack.Navigator defaultScreenOptions={{ headerShown: false }}>
    <Stack.Screen
      options={{ headerShown: true }}
      name="List"
      component={Listing}
    />
    <Stack.Screen name="ListingDetail" component={ListingDetail} />
    <Stack.Screen
      options={{ headerShown: true }}
      name="UpdateProf"
      component={UpdateProfessor}
    />
  </Stack.Navigator>
);

const ListingNavigation = () => {
  return <StackListingDetails />;
};

export default ListingNavigation;

const styles = StyleSheet.create({});
