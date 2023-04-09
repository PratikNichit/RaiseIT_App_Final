import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import { getAuth } from "firebase/auth";

function WelcomeScreen({ navigation }) {
  const auth = getAuth();
  const user = auth.currentUser;

  if (user) {
    console.log("present ");
  } else {
    console.log("not present");
  }
  return (
    <View style={styles.container}>
      <Screen>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/welcome.png")}
            style={styles.image}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Hey! Welcome</Text>
          <Text style={styles.subtitle}>
            {"Raise the grivance to PMC with our \n mobile app, connecting "}
            {"citizens directly \nto the local corporation."}
          </Text>
        </View>
        <AppButton
          tittle={"Get Started"}
          style={styles.button}
          onPress={() => navigation.navigate("Option")}
        ></AppButton>
      </Screen>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  button: {
    width: "90%",
    borderRadius: 10,
    backgroundColor: "#367cff",
    alignSelf: "center",
    marginTop: 180,
    marginBottom: 60,
  },
  image: {
    height: 250,
    width: 310,
    marginTop: 60,
    justifyContent: "center",
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "500",
  },
  textContainer: {
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default WelcomeScreen;
