import React from "react";
import Constants from "expo-constants";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native";

function Screen(props, style) {
  return (
    <SafeAreaView style={[styles.screen, style]}>{props.children}</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 0,
    paddingTop: Constants.statusBarHeight,
  },
});

export default Screen;
