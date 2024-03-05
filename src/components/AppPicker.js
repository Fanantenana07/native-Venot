import {
  View,
  Text,
  Modal,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";

import AppText from "./AppText";
import colors from "../config/colors";
import { FlatList } from "react-native-gesture-handler";
import ItemPicker from "./ItemPicker";

const AppPicker = ({
  selectedItem,
  data,
  onSelectItem,
  onClose,
  show,
  setShow,
}) => {
  selectedItem = !selectedItem ? data[0] : selectedItem;
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setShow(true)}>
        <View style={styles.container}>
          <MaterialCommunityIcons
            style={{ marginLeft: 10, color: colors.secondary }}
            name="view-list"
            size={30}
          />
          <View style={styles.label}>
            <AppText>{selectedItem}</AppText>
          </View>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            style={styles.chevron}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={show} animationType={"slide"}>
        <View>
          <MaterialCommunityIcons onPress={onClose} name="close" size={20} />
          <FlatList
            data={data}
            keyExtractor={(i) => i}
            renderItem={({ item }) => (
              <ItemPicker
                onClose={onClose}
                item={item}
                onSelectItem={onSelectItem}
              />
            )}
          />
        </View>
      </Modal>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light_gray,
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 30,
  },
  label: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
    color: colors.primary,
  },
  chevron: {
    fontWeight: "bold",
    fontSize: 30,
    color: colors.secondary,
  },
});

export default AppPicker;
