import React from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import Constants from "expo-constants";

import Card from "../components/Card";
function OptionScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> {"Select \n User Type"} </Text>
      <View style={styles.cardContainer}>
        <Card
          image={require("../assets/group.png")}
          subtitle={"citizen"}
          color={styles.citizenCard}
          onPress={() => navigation.navigate("Citizen")}
        ></Card>
        <Card
          image={require("../assets/officer.png")}
          subtitle={"Officer"}
          color={styles.officerCard}
          onPress={() => navigation.navigate("Officer")}
        ></Card>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  cardContainer: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 50,
  },
  citizenCard: {
    margin: 20,
  },
  officerCard: {
    margin: 20,
    backgroundColor: "#f4ba7b",
  },
  title: {
    marginLeft: 20,
    marginTop: 20,
    fontSize: 30,
    fontWeight: "bold",
  },
});
export default OptionScreen;
