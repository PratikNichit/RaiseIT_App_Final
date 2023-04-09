import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import LoginScreen from "../screens/LoginScreen";
import OfficerAppNavigator from "./OfficerAppNavigator";

const Stack = createStackNavigator();

function OfficerNavigator(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={OfficerAppNavigator}
      />
    </Stack.Navigator>
  );
}

export default OfficerNavigator;
