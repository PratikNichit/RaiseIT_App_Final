import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import Screen from "../components/Screen";
function TagPostScreen(props) {
  return (
    <Screen>
      <View style={styles.Container}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Taged Post</Text>
        </View>
        <View style={styles.separator}></View>
        {/* <View style={styles.scroller}>
          <FlatList
            data={posts}
            keyExtractor={(post) => post.Id}
            renderItem={({ item }) => (
              <Post
                image={item.ImageUrl}
                description={item.Description}
                username={item.Name}
                area={item.Location}
                pincode={item.Pincode}
                onPress={() => navigation.navigate("ViewPost", item)}
              />
            )}
            inverted
          />
        </View> */}
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  headingContainer: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
  },
  scroller: {
    width: "100%",
    height: "91%",
    marginTop: 10,
    marginEnd: 10,
  },

  Container: {
    backgroundColor: "#f8f4f0",
    padding: 10,
  },

  separator: {
    width: "100%",
    height: 1,
    backgroundColor: "black",
  },
});

export default TagPostScreen;
