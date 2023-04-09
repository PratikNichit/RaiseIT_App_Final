import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

function AppIconList({ title, IconComponent, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        {IconComponent}
        <View style={styles.text}>
          <Text style={styles.username}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 20,
    backgroundColor: "#fff",
  },
  text: {
    justifyContent: "center",
  },
  username: {
    fontSize: 18,
    fontWeight: "600",
  },
  place: {
    fontSize: 15,
    color: "grey",
  },
});

export default AppIconList;
