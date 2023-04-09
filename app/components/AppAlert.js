import React, { useState } from "react";
import { Modal, View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function AppAlert({ title, visible, onPress, margin }) {
  return (
    <>
      <Modal animationType="fade" visible={visible} transparent={true}>
        <View style={styles.container}>
          <View style={styles.message}>
            <MaterialCommunityIcons
              name="check-circle-outline"
              size={30}
              color="#fff"
            />
            <Text style={[styles.title, margin]}>{title}</Text>
            <TouchableOpacity onPress={onPress}>
              <MaterialCommunityIcons
                name={"close-circle"}
                size={34}
                color="black"
              />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  bth: {
    marginTop: 100,
    backgroundColor: "red",
  },
  message: {
    flexDirection: "row",
    height: 60,
    width: "100%",
    backgroundColor: "#388e3c",
    padding: 10,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  container: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  close: {
    backgroundColor: "#fff",
    width: 50,
    height: 30,
  },
  title: {
    marginLeft: 10,
    fontSize: 20,
    color: "#fff",
    marginRight: 150,
  },
});
export default AppAlert;
