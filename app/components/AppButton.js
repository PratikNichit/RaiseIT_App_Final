import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function AppButton({ tittle, onPress, style, text, icon, size }) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      {icon && <MaterialCommunityIcons name={icon} size={30} color="black" />}
      {tittle && <Text style={[styles.Text, text]}>{tittle}</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#1267ef",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginTop: 10,
  },
  Text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
export default AppButton;
