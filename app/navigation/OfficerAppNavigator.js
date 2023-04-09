import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import FeedNavigator from "./FeedNavigator";
import TrendingFeedNavigator from "./TrendingFeedNavigator";
import AccountScreen from "../screens/AccountScreen";
import TagPostScreen from "../screens/TagPostScreen";

const Tab = createBottomTabNavigator();

const OfficerAppNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarShowLabel: "false",
      tabBarHideOnKeyboard: "true",
    }}
  >
    <Tab.Screen
      name="Home"
      component={FeedNavigator}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="home-filled" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Trending"
      component={TrendingFeedNavigator}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons
            name="local-fire-department"
            size={size}
            color={color}
          />
        ),
      }}
    />
    <Tab.Screen
      name="TagScreen"
      component={TagPostScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="tag" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Account"
      component={AccountScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default OfficerAppNavigator;
