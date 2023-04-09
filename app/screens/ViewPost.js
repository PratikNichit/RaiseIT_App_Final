import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

import Screen from "../components/Screen";
import User from "../components/User";
import AppTextInput from "../components/AppTextinput";
import PostDetails from "../components/PostDetails";
import { ScrollView } from "react-native";

function ViewPost({ route }) {
  const listing = route.params;

  return (
    <View style={styles.MainContainer}>
      <ScrollView>
        <View style={styles.imageContainer}>
          <User
            image={{
              uri: "https://firebasestorage.googleapis.com/v0/b/raiseit-f4633.appspot.com/o/profile.png?alt=media&token=f835f50e-5875-401a-b1b5-fc45d3f09d33",
            }}
            username={listing.Name}
            style={styles.userView}
          />
          <Image source={{ uri: listing.ImageUrl }} style={styles.image} />
          <View style={styles.descriptionContainer}>
            <Text style={styles.title}>Description</Text>
            <AppTextInput
              style={styles.descriptionText}
              containerStyle={styles.descriptionBox}
              multiline
              readOnly
            >
              {listing.Description}
            </AppTextInput>
          </View>
          <PostDetails
            location={listing.Location}
            pincode={listing.Pincode}
          ></PostDetails>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  descriptionBox: {
    marginVertical: 0,
    padding: 12,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 200,
  },
  imageContainer: {
    backgroundColor: "#fff",
    padding: 2,
  },
  UserContainer: {
    padding: 5,
  },
  MainContainer: {
    padding: 5,
    backgroundColor: "#fff",
  },
  descriptionText: {
    backgroundColor: "#fff",
    color: "black",
    textAlign: "justify",
    fontSize: 16,
    marginLeft: -2,
  },
  descriptionContainer: {
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#f4ba7b",
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 5,
    marginBottom: 5,
  },
  userView: {
    borderRadius: 0,
    padding: 10,
    backgroundColor: "#fff",
  },
});
export default ViewPost;
