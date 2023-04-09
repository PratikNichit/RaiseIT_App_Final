import React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

function Icon({
  name,
  ionicon,
  size = 40,
  backgroundColor = "#000",
  iconColor = "#fff",
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {name && (
        <MaterialCommunityIcons
          name={name}
          color={iconColor}
          size={size * 0.5}
        />
      )}
      {ionicon && (
        <Ionicons name={ionicon} color={iconColor} size={size * 0.5} />
      )}
    </View>
  );
}

export default Icon;
