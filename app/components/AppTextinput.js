import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import {
  AntDesign,
  MaterialIcons,
  FontAwesome,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";

function AppTextinput({
  icon,
  Materialicon,
  fonticon,
  communityicon,
  fiveicon,
  style,
  containerStyle,
  width = "100%",
  ...otherprops
}) {
  return (
    <View style={[styles.container, containerStyle, { width }]}>
      {icon && (
        <AntDesign name={icon} size={24} color="#000000" style={styles.icon} />
      )}

      {Materialicon && (
        <MaterialIcons
          name={Materialicon}
          size={24}
          color="#000000"
          style={styles.icon}
        />
      )}

      {communityicon && (
        <MaterialCommunityIcons
          name={communityicon}
          size={24}
          color="black"
          style={styles.icon}
        />
      )}

      {fonticon && (
        <FontAwesome
          name={fonticon}
          size={24}
          color="#000000"
          style={styles.icon}
        />
      )}

      {fiveicon && (
        <FontAwesome5
          name={fiveicon}
          size={24}
          color="#000000"
          style={styles.icon}
        />
      )}

      <TextInput style={[styles.textInput, style]} {...otherprops} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f8f4",
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },
  textInput: {
    fontSize: 18,
    flex: 1,
  },
  icon: {
    marginRight: 10,
  },
});
export default AppTextinput;
