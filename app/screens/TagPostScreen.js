import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import Screen from "../components/Screen";
import Post from "../components/Post";
import { auth, db } from "../../firebase";
import { useNavigation } from "@react-navigation/core";
import { ref, set, update, onValue, remove, orderByChild, orderByValue,query, equalTo } from "firebase/database";
import { onAuthStateChanged } from "firebase/auth";


function TagPostScreen() {
  const [posts, setPosts] = useState([]);
  const [uid,setUID]=useState('');
  const [tag,setTag]=useState('');
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        //setUID(uid);
        setUID(uid);
        getTagData(uid);
        // ...
      }
    });
    //console.log(tag);
    //getAdminTagData(uid);
    const postRef = query(ref(db, 'posts/'),orderByChild("Tag"),equalTo(" "+tag));
    onValue(postRef, (snapshot) => {
      const posts = []
      snapshot.forEach((childSnapshot) => {
        const { UserId, ImageUrl, Location, Pincode, Description, Tag, Id,UserName,LikeCount } = childSnapshot.val();

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
      setPosts(posts)
    });
  }, []);

  const getTagData = () =>{
    const adminRef = ref(db, 'admins/' + uid);
    onValue(adminRef, (snapshot) => {
    const {tag} = snapshot.val();
    setTag(tag);
  });  
  }

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
              />
            )}
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
    backgroundColor: "#f8f4f4",
    padding: 10,
  },

  separator: {
    width: "100%",
    height: 1,
    backgroundColor: "black",
  },
});

export default TagPostScreen;
