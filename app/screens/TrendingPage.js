import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import Screen from "../components/Screen";
import Post from "../components/Post";
import { db } from "../../firebase";
import { useNavigation } from "@react-navigation/core";
import { ref, set, update, onValue, remove } from "firebase/database";
import { getAuth,signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Home() {
  const [posts, setPosts] = useState([]);
  const [username, setUserName] = useState("");
  const [userData, setUsetData] = useState({});
  const [userUID, setUID] = useState();
  const postRef = ref(db, "posts/");
  const auth = getAuth();
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        setUID(uid);
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
    //retriveData();
    onValue(postRef, (snapshot) => {
      const posts = []
      snapshot.forEach((childSnapshot) => {
      childSnapshot.forEach((childSnapshottag) => {
        const { UserId, ImageUrl, Location, Pincode, Description, Tag, Id,UserName,LikeCount } = childSnapshottag.val();

        // const userRef = ref(db, 'users/' + UserId);
        // onValue(userRef, (snapshot) => {
        //   const { address, area, email, name, pincode } = snapshot.val();
        //   setUserName(name);
        // });
        posts.push({
          UserId: UserId,
          ImageUrl: ImageUrl,
          Location: Location,
          Pincode: Pincode,
          Description: Description,
          Tag: Tag,
          Id: Id,
          Name: UserName,
          LikeCount:LikeCount,
        })
      })
    })
      setPosts(posts);
    });
  }, []);

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

  const navigation = useNavigation();
  
  return (
    <Screen>
      <View style={styles.Container}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>𝚁𝚊𝚒𝚜𝚎𝙸𝚃</Text>
        </View>
        <View style={styles.separator}></View>
        <View style={styles.scroller}>
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
                uid={item.UserId}
                onPress={() => navigation.navigate("ViewPost", item)}
                postid={item.Id}
                likeCount={item.LikeCount}
                currUserId={userUID}
                tag={item.Tag}
              />
            )}
            inverted
          />
        </View>
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
    fontWeight: "100",
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

export default Home;
