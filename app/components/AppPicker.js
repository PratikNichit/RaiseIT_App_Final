import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Button,
} from "react-native";
import { FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Modal } from "react-native";

import Screen from "./Screen";
import PickerItem from "./PickerItem";
import AppButton from "./AppButton";
import { ScrollView } from "react-native";

function AppPicker({
  communityicon,
  items,
  placeholder,
  onSelectItem,
  selectedItem,
}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          <Text style={styles.textInput}>
            {selectedItem ? selectedItem.label : placeholder}
          </Text>
          <MaterialCommunityIcons name="chevron-down" size={24} color="black" />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <ScrollView>
          <Screen>
            <AppButton
              icon={"chevron-down"}
              style={styles.button}
              text={styles.btnText}
              onPress={() => setModalVisible(false)}
            />
            <FlatList
              data={items}
              keyExtractor={(item) => item.value.toString()}
              renderItem={({ item }) => (
                <PickerItem
                  label={item.label}
                  onPress={() => {
                    setModalVisible(false);
                    onSelectItem(item);
                  }}
                />
              )}
            />
          </Screen>
        </ScrollView>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f8f4",
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  textInput: {
    color: "grey",
    fontSize: 18,
    flex: 1,
  },
  icon: {
    marginRight: 10,
  },
  button: {
    marginTop: -20,
    alignSelf: "center",
    backgroundColor: "#fff",
    width: "15%",
    borderRadius: 30,
    height: 60,
  },
  btnText: {
    color: "#fff",
  },
});

export default AppPicker;
