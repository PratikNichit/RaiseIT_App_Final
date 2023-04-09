import React from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  Text,
} from "react-native";
import * as Yup from "yup";
import { useState, useEffect } from "react";
import { storage, auth, db } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { set, ref as ref_database } from "firebase/database";

import {
  AppForm,
  AppFormField,
  AppSubmitButton,
  AppFormPicker,
} from "../components/forms";
import AppImageInput from "../components/forms/AppImageInput";
import Screen from "../components/Screen";
import AppAlert from "../components/AppAlert";
import { onAuthStateChanged } from "firebase/auth";

const validation = Yup.object().shape({
  image: Yup.string().required(),
  location: Yup.string().required().label("Location"),
  Pin_code: Yup.string()
    .required()
    .matches(/^\d{6}$/, "Pin_code must contain 6 digits"),
  description: Yup.string().required().max(1000).label("Description"),
  tag: Yup.object().required().nullable().label("Tag"),
});

const categories = [
  { label: " Water Supply and Pumping Department", value: 1 },
  { label: " Tree Authority Department", value: 2 },
  { label: " Solid Waste Management", value: 3 },
  { label: " Road Department", value: 4 },
  { label: " Rajiv Gandhi Zoological Park", value: 5 },
  { label: " Health Department", value: 6 },
  { label: " Fire Brigade", value: 7 },
  { label: " Electrical Department", value: 8 },
  { label: " Drainage Department", value: 9 },
  { label: " Disaster Management Cell", value: 10 },
  { label: " Election Department", value: 11 },
  { label: " Motor Vehicles Department (RTO) ", value: 12 },
  { label: " Cultural Centres", value: 13 },
  { label: " Garden Department", value: 14 },
  { label: " Environment Department", value: 15 },
  { label: " Social Development Department ", value: 16 },
];

function AddPost(props) {
  const [userUID, setUID] = useState();
  const [uploading, setUploading] = useState(false);
  const [userName, setName] = useState();
  const [modalvisible, setModalVisible] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        setUID(uid);
        setName(user.displayName);
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);

  const saveData = (imageURL, values) => {
    set(ref_database(db, "posts/" + Date.now()), {
      UserId: userUID,
      UserName: userName,
      ImageUrl: imageURL,
      Location: values.location,
      Pincode: values.Pin_code,
      Description: values.description,
      Tag: values.tag.label,
      Id: Date.now(),
    })
      .then(() => {
        setModalVisible(true);
      })
      .catch((error) => {
        // The write failed...
        alert(error.message);
      });
  };

  const uploadImage = async (value) => {
    const blobimage = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function () {
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", value.image, true);
      xhr.send(null);
    });

    // Create file metadata including the content type
    /** @type {any} */
    const metadata = {
      contentType: "image/jpeg",
    };

    const storageRef = ref(storage, "images/" + Date.now());

    const uploadTask = uploadBytesResumable(storageRef, blobimage, metadata);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            setUploading(false);
            break;
          case "running":
            console.log("Upload is running");
            setUploading(true);
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
        setUploading(false);
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          saveData(downloadURL, value);
          setUploading(false);
        });
      }
    );
  };

  return (
    <Screen style={styles.background}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.headingContainer}>
            <Text style={styles.heading}>𝚁𝚊𝚒𝚜𝚎𝙸𝚃</Text>
          </View>
          <AppForm
            initialValues={{
              location: "",
              Pin_code: "",
              description: "",
              tag: null,
              image: null,
            }}
            onSubmit={(values) => {
              uploadImage(values);
            }}
            validationSchema={validation}
          >
            <AppImageInput name={"image"} style={styles.image} />
            <AppFormField
              name={"location"}
              placeholder="location"
              multiline
              Materialicon="location-on"
            />
            <AppFormField
              name={"Pin_code"}
              fiveicon="map-pin"
              placeholder="Pin_code"
              maxLength={6}
              width={150}
              keyboardType="number-pad"
            />
            <AppFormPicker
              items={categories}
              name={"tag"}
              placeholder="Tag_to"
            />
            <AppFormField
              name={"description"}
              placeholder="description"
              multiline
              communityicon="clipboard-text-multiple"
            />
            {!uploading ? (
              <AppSubmitButton style={styles.button} tittle="POST" />
            ) : (
              <ActivityIndicator size="large" color="#000" />
            )}
          </AppForm>
          <AppAlert
            title={"Post added sucessfully"}
            visible={modalvisible}
            onPress={() => setModalVisible(false)}
            margin={styles.close}
          />
        </View>
      </ScrollView>
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
  container: {
    padding: 10,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
  button: {
    marginBottom: 269,
  },
  image: {
    marginTop: 20,
    marginBottom: 10,
    alignItems: "center",
  },
  close: {
    marginRight: 50,
  },
});

export default AddPost;
