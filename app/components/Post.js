import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, Text } from "react-native";

import User from "./User";
import { TouchableWithoutFeedback } from "react-native";
import LikeButton from "./LikeButton";
import { Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { storage, auth, db } from "../../firebase";
import { set, ref, update, remove,onValue } from "firebase/database";
import { onAuthStateChanged } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Post({ image, description, username, onPress, area, postid, uid, likeCount,currUserId,tag }) {
  const [liked, setLiked] = useState(false);
  const [userUID,setUID]=useState();

  useEffect(() => {
    //console.log(currUserId);
    const postRef = ref(db, 'posts/' +tag+"/"+postid + '/LikedUsers/');
    onValue(postRef, (snapshot) => {
      console.log(snapshot.key);
      snapshot.forEach((childSnapshot) => {
        const {LikedUserID} = childSnapshot.val();
        if(LikedUserID==currUserId){
          console.log("condition");
          setLiked(true);
        }
      })
    });
  }, [])

  const onLikeClick = () => {
    //setLiked((isLiked) => !isLiked);
    if (!liked) {
      update(ref(db, 'posts/' +tag+"/"+postid), {
        LikeCount: Number(likeCount) + 1,
      }).then(() => {
        // Data saved successfully!
        //console.log("Liked post");
        set(ref(db, 'posts/' +tag+"/"+postid + '/LikedUsers/' + currUserId), {
          LikedUserID: currUserId,
        });
        setLiked(true);
      }).catch((error) => {
        // The write failed...
        alert(error.message);
      });
      //console.log("like");
    }
    else {
      //console.log("unlike");
      update(ref(db, 'posts/' +tag+"/"+postid), {
        LikeCount: Number(likeCount) - 1,
      }).then(() => {
        // Data saved successfully!
        remove(ref(db, 'posts/' +tag+"/"+postid + '/LikedUsers/' + currUserId));
        setLiked(false);
      }).catch((error) => {
        // The write failed...
        alert(error.message);
      });
    }

  }

  return (
    <>
      <View style={styles.card}>
        <User image={require("../assets/profile.png")} username={username} />
        <TouchableWithoutFeedback onPress={onPress}>
          <Image source={{ uri: image }} style={styles.image} />
        </TouchableWithoutFeedback>
        <Text numberOfLines={2} style={styles.descriptionText}>
          {description}
        </Text>
        <View style={styles.likeContainer}>
         <Pressable onPress={() => onLikeClick()}>
            <MaterialCommunityIcons
              name={liked ? "heart" : "heart-outline"}
              size={28}
              color={liked ? "red" : "black"}
            />
          </Pressable>
          <Text style={styles.likeCount}>{likeCount ? likeCount : 0} Likes</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: "#fff",
    marginBottom: 20,
    padding: 10,
  },
  image: {
    width: "100%",
    height: 200,
    marginTop: 5,
    marginBottom: 5,
  },
  descriptionText: {
    textAlign: "justify",
  },
  likeContainer: {
    marginTop: 10,
  },
  likeCount: {
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default Post;
