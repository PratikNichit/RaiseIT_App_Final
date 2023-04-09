import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

function Card({ image, onPress, subtitle, color }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, color]}>
        <View style={styles.iconContainer}>
          <Image source={image} style={styles.icon}></Image>
        </View>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 135,
    height: 150,
    backgroundColor: "#98d1ef",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  iconContainer: {
    backgroundColor: "#fff",
    width: 70,
    height: 70,
    borderRadius: 35,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 55,
    height: 55,
  },
  subtitle: {
    marginTop: 5,
    fontSize: 15,
    fontWeight: "bold",
  },
});
export default Card;
