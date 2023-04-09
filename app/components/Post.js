import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

import User from "./User";
import { TouchableWithoutFeedback } from "react-native";
import LikeButton from "./LikeButton";
function Post({ image, description, username, onPress, area, pincode }) {
  return (
    <>
      <View style={styles.card}>
        <User image={require("../assets/profile.png")} username={username} />
        <TouchableWithoutFeedback onPress={onPress}>
          <Image source={{ uri: image }} style={styles.image} />
        </TouchableWithoutFeedback>
        <Text numberOfLines={2} style={styles.descriptionText}>
          {description}
        </Text>
        <View style={styles.likeContainer}>
          <LikeButton />
          <Text style={styles.likeCount}>3 likes</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: "#fff",
    marginBottom: 20,
    padding: 10,
  },
  image: {
    width: "100%",
    height: 200,
    marginTop: 5,
    marginBottom: 5,
  },
  descriptionText: {
    textAlign: "justify",
  },
  likeContainer: {
    marginTop: 10,
  },
  likeCount: {
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default Post;
