import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { useEffect } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

function ImageInput({ imageUri, onChangeImage, onBlur }) {
  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const result = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!result.granted) {
      alert("You need to enable permission to access the files");
    }
  };

  const handlePress = () => {
    if (!imageUri) selectImage();
    else
      Alert.alert("Delete", "Are you sure you want to delete this image?", [
        { text: "Yes", onPress: () => removeImage() },
        { text: "No" },
      ]);
  };

  const removeImage = () => {
    if (true) onChangeImage("");
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.canceled) onChangeImage(result.uri);
      //console.log("Image uri", result.uri);
    } catch (error) {
      console.log("error reading while image", error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress} onBlur={onBlur}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons name="camera" color="grey" size={40} />
        )}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f8f4",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    height: 200,
    width: 300,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ImageInput;