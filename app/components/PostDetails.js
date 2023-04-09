import React from "react";
import { StyleSheet, View, Text } from "react-native";

import AppTextInput from "./AppTextinput";

function PostDetails({ location, pincode }) {
  return (
    <View style={styles.locationContainer}>
      <Text style={styles.title}>Location Details</Text>
      <Text style={styles.subtitle}>Address</Text>
      <AppTextInput
        style={styles.addressText}
        containerStyle={styles.descriptionBox}
        multiline
        readOnly
      >
        {location}
      </AppTextInput>
      <Text style={styles.subtitle}>Pin Code</Text>
      <AppTextInput
        style={styles.pinCodeText}
        containerStyle={styles.pinCodeBox}
        width="25%"
        multiline
        readOnly
      >
        {pincode}
      </AppTextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  descriptionBox: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginBottom: 3,
  },
  pinCodeBox: {
    height: 50,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginBottom: -6,
  },
  addressText: {
    backgroundColor: "#fff",
    color: "black",
    textAlign: "justify",
    fontSize: 16,
    marginLeft: -2,
  },
  pinCodeText: {
    backgroundColor: "#fff",
    color: "black",
    textAlign: "center",
    fontSize: 16,
    marginLeft: -2,
  },
  locationContainer: {
    width: "100%",
    height: 250,
    backgroundColor: "#98d1ef",
    borderRadius: 10,
    padding: 10,
  },
  subtitle: {
    fontSize: 15,
    marginTop: 10,
    marginLeft: 5,
    marginBottom: -10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 5,
  },
});
export default PostDetails;
