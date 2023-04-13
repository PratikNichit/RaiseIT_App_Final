import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import Screen from "../components/Screen";
import Icon from "../components/Icon";
import { auth, db } from "../../firebase";
import { useNavigation } from "@react-navigation/core";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { ref, set, update, onValue, remove } from "firebase/database";
import AsyncStorage from "@react-native-async-storage/async-storage";

function AccountScreen({ name }) {
  const [userUID, setUID] = useState();
  const [userEmail, setEmail] = useState();
  const [userName, setName] = useState();
  const [postCount, setPostCount] = useState();
  const [userData, setUsetData] = useState({});
  const postRef = ref(db, "posts/");

  const saveData = async () => {
    try {
      await AsyncStorage.setItem("user", "");
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        setUID(uid);
        setEmail(user.email);
        setName(user.displayName);
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
    retriveData();
    getUserPostCount();
  }, []);

  const logout = () => {
    // write logout backend code here
    console.log("Logout");
    saveData();
    handleSignOut();
  };

  const retriveData = async () => {
    try {
      const value = await AsyncStorage.getItem("user");
      //console.log(value);
      if (value !== null) {
        setUsetData(JSON.parse(value));
        //getLikePostData();
        //navigation.replace("Home");
      }
      // if (userData.keeplogin == "true") {
      //   console.log(isLogin);
      // }
    } catch (e) {
      alert("Failed to fetch the input from storage:"+e);
    }
  };

  var count = 0;
  const getUserPostCount = () => {
    onValue(postRef, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const {
          UserId,
          ImageUrl,
          Location,
          Pincode,
          Description,
          Tag,
          Id,
          UserName,
        } = childSnapshot.val();
        if (UserId == userUID) {
          count++;
        }
      });
    });
    console.log(count);
    setPostCount(count);
  };

  const handlePress = () => {
    Alert.alert("logout", "Are you sure you want to logout", [
      { text: "Yes", onPress: () => logout() },
      { text: "No" },
    ]);
  };

  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.titleBar}>
          <Text style={styles.title}>My Profile</Text>
        </View>
        <View>
          <View style={styles.profileContainer}>
            <Image
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/raiseit-f4633.appspot.com/o/profile.png?alt=media&token=f835f50e-5875-401a-b1b5-fc45d3f09d33",
              }}
              style={styles.image}
            />
          </View>
          <View>
            <Text style={styles.nameText}>{userName}</Text>
            <Text style={styles.placeText}>{userEmail}</Text>
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.PostCount}>
              <Icon
                ionicon={"image-outline"}
                size={90}
                backgroundColor="#98d1ef"
              />
              <Text style={styles.postText}>Posts</Text>
              <Text style={styles.postNumber}>{postCount}</Text>
            </View>
            <TouchableWithoutFeedback onPress={handlePress}>
              <View style={styles.logoutBtn}>
                <Icon name={"logout"} size={90} backgroundColor="#f4ba7b" />
                <Text style={styles.logoutText}>Logout</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  profileContainer: {
    backgroundColor: "red",
    width: 200,
    height: 200,
    alignSelf: "center",
    marginTop: 20,
    borderRadius: 100,
    overflow: "hidden",
    borderColor: "`#000",
    borderWidth: 1,
  },
  image: {
    width: 200,
    height: 200,
  },
  nameText: {
    alignSelf: "center",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 15,
  },
  placeText: {
    alignSelf: "center",
    fontSize: 18,
    color: "#7e7e7e",
    marginTop: 4,
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 165,
  },
  PostCount: {
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#98d1ef",
    borderRadius: 15,
    height: 150,
    width: 125,
    marginTop: 30,
  },
  logoutBtn: {
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#f4ba7b",
    borderRadius: 15,
    height: 150,
    paddingTop: 15,
    width: 125,
    marginTop: 30,
  },
  postText: {
    marginTop: -20,
    marginBottom: 2,
    fontSize: 15,
    fontWeight: "bold",
  },
  postNumber: {
    fontSize: 20,
    fontWeight: "bold",
  },
  logoutText: {
    marginTop: -10,
    fontSize: 20,
    fontWeight: "bold",
  },
  titleBar: {
    width: "100%",
    marginTop: 20,
    alignItems: "center",
    height: 50,
  },
  title: {
    fontSize: 25,
    fontWeight: "800",
  },
});

export default AccountScreen;
