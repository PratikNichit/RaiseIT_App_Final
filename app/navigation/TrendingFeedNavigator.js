import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TrendingPage from "../screens/TrendingPage";
import ViewPost from "../screens/ViewPost";

const Stack = createStackNavigator();

const TrendingFeedNavigator = () => (
  <Stack.Navigator screenOptions={{ presentation: "Modal" }}>
    <Stack.Screen
      name="TrendingFeed"
      component={TrendingPage}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ViewPost"
      component={ViewPost}
      options={{ headerShown: true }}
    />
  </Stack.Navigator>
);

export default TrendingFeedNavigator;
