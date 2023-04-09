import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

function User({
  image,
  username,
  place,
  style,
  imageStyle,
  usernameStyle,
  textContainer,
  placeStyle,
  IconComponent,
}) {
  return (
    <View style={[styles.container, style]}>
      {IconComponent}
      {image && <Image source={{uri:'https://firebasestorage.googleapis.com/v0/b/raiseit-f4633.appspot.com/o/profile.png?alt=media&token=f835f50e-5875-401a-b1b5-fc45d3f09d33'}} style={[styles.image, imageStyle]} />}
      <View style={[styles.text, textContainer]}>
        <Text style={[styles.username, usernameStyle]}>{username}</Text>
        {place && <Text style={[styles.place, placeStyle]}>{place}</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 35,
  },
  text: {
    justifyContent: "center",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 35,
    borderColor: "white",
    borderWidth: 1,
    marginRight: 10,
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
export default User;
