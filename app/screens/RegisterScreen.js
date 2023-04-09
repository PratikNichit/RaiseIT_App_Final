import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { ref, set, update, onValue, remove } from "firebase/database";
import { updateProfile } from "firebase/auth";
import * as Yup from "yup";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { auth, db } from "../../firebase";
import Screen from "../components/Screen";
import { AppForm, AppFormField, AppSubmitButton } from "../components/forms";

function RegisterScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [area, setArea] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Home");
      }
    });

    return unsubscribe;
  }, []);

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Registered with:", user.email);
        saveData(user.uid);
        updateProfile(user, {
          displayName: name,
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
      })
      .catch((error) => alert(error.message));
  };

  const saveData = (userid) => {
    set(ref(db, "users/" + userid), {
      name: name,
      email: email,
      address: address,
      area: area,
      pincode: pincode,
    })
      .then(() => {
        // Data saved successfully!
      })
      .catch((error) => {
        // The write failed...
        alert(error);
      });
  };
  return (
    <Screen>
      <ScrollView>
        <View style={styles.container}>
          <AppForm
            initialValues={{
              location: "",
              Pin_code: "",
              description: "",
              tag: null,
            }}
          >
            <AppFormField
              name={"name"}
              icon="user"
              placeholder="Name"
              autoCorrect={false}
              autoCapitize="none"
              value={name}
              onChangeText={(text) => setName(text)}
            />

            <AppFormField
              name={"email"}
              Materialicon="email"
              placeholder="Email"
              autoCorrect={false}
              autoCapitize="none"
              keyboardType="email-address"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />

            <AppFormField
              name={"address"}
              fonticon="address-book"
              placeholder="address"
              autoCorrect={false}
              multiline={true}
              autoCapitize="none"
              value={address}
              onChangeText={(text) => setAddress(text)}
            />
            <AppFormField
              name={"Pin_code"}
              Materialicon="dialpad"
              placeholder="Pin-code"
              maxLength={6}
              autoCorrect={false}
              autoCapitize="none"
              keyboardType="number-pad"
              value={pincode}
              onChangeText={(text) => setPincode(text)}
            />
            <AppFormField
              name={"area"}
              fiveicon="map-pin"
              placeholder="Area"
              autoCorrect={false}
              autoCapitize="none"
              value={area}
              onChangeText={(text) => setArea(text)}
            />
            <AppFormField
              name={"password"}
              icon="lock"
              placeholder="Password"
              autoCorrect={false}
              autoCapitize="none"
              secureTextEntry
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity onPress={handleSignUp} style={styles.button}>
              <Text style={styles.buttonText}> Register</Text>
            </TouchableOpacity>
          </AppForm>
          <View style={styles.textContainer}>
            <Text>already registed?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.textClick}> login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  textContainer: {
    marginTop: 10,
    flexDirection: "row",
    alignSelf: "center",
  },
  textClick: {
    fontWeight: "bold",
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#0782F9",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#0782F9",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "#0782F9",
    fontWeight: "700",
    fontSize: 16,
  },
});
