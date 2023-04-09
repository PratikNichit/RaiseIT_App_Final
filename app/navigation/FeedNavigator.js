import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import ViewPost from "../screens/ViewPost";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator screenOptions={{ presentation: "modal" }}>
    <Stack.Screen
      name="Feed"
      component={Home}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ViewPost"
      component={ViewPost}
      options={{ headerShown: true }}
    />
  </Stack.Navigator>
);

export default FeedNavigator;
