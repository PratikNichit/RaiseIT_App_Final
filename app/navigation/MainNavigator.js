import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import WelcomeScreen from "../screens/WelcomeScreen";
import OptionScreen from "../screens/OptionScreen";
import OfficerNavigator from "../navigation/OfficerNavigator";
import CitizenNavigator from "./CitizenNavigator";

const Stack = createStackNavigator();

function MainNavigator(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Welcome"
          component={WelcomeScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Option"
          component={OptionScreen}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="Officer"
          component={OfficerNavigator}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Citizen"
          component={CitizenNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;
