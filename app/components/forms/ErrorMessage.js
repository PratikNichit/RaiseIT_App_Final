import React from "react";
import { Text, StyleSheet } from "react-native";

function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;
  return <Text style={styles.error}>{error}</Text>;
}

const styles = StyleSheet.create({
  error: {
    color: "red",
    fontSize: 16,
    marginLeft: 10,
  },
});

export default ErrorMessage;
