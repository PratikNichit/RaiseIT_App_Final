import { useNavigation } from "@react-navigation/core";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";

import Screen from "../components/Screen";
import { AppForm, AppFormField, AppSubmitButton } from "../components/forms";

const validation = Yup.object().shape({
  username: Yup.string().required().min(8).label("Username"),
  password: Yup.string().required().min(6).label("Password"),
});

function LoginScreen({ check }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Home");
      }
    });

    return unsubscribe;
  }, []);

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with:", user.email);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <Screen style={styles.container}>
      <View style={styles.container}>
        <Image source={require("../assets/RaiseIT.png")} style={styles.logo} />

        <AppForm
          initialValues={{ username: "", password: "" }}
          onSubmit={(values) => {
            navigation.navigate("Home");
          }}
          validationSchema={validation}
        >
          <AppFormField
            Materialicon="email"
            name={"email"}
            placeholder="Email"
            autoCorrect={false}
            autoCapitize="none"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />

          <AppFormField
            icon="lock"
            name={"password"}
            placeholder="Password"
            secureTextEntry
            autoCorrect={false}
            autoCapitize="none"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity onPress={handleLogin} style={[styles.button]}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <View style={styles.textContainer}>
            <Text>Do you have account? </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("RegisterScreen")}
            >
              <Text style={styles.textClick}>Register</Text>
            </TouchableOpacity>
          </View>
        </AppForm>
      </View>
    </Screen>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  container: {
    padding: 10,
  },
  textContainer: {
    marginTop: 10,
    flexDirection: "row",
    alignSelf: "center",
  },
  textClick: {
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#0782F9",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
