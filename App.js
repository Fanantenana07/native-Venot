import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import Lising from "./src/screens/Listing";
import NewProf from "./src/screens/NewProduct";
import Home from "./src/screens/Home";

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="home"
      options={{ headerShown: false }}
      component={Home}
    />
    <Stack.Screen
      name="New"
      options={{ headerShown: false }}
      component={NewProf}
    />
  </Stack.Navigator>
);
export default function App() {
  return (
    <>
      {/* <Container position="top" animationStyle="fancy" /> */}
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </>
  );
}
