import { TouchableHighlight, StyleSheet, View } from "react-native";
import React from "react";
import AppText from "./AppText";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const ItemPicker = ({ item, onSelectItem, onClose }) => {
  return (
    <TouchableHighlight
      underlayColor={colors.light_gray}
      onPress={() => {
        onSelectItem(item);
        onClose(false);
      }}
    >
      <View style={styles.container}>
        <MaterialCommunityIcons name="menu-right" size={20} />
        <AppText style={styles.text}>{item}</AppText>
      </View>
    </TouchableHighlight>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light_gray,
    width: "100%",
    padding: 10,
    marginVertical: 2,
    flexDirection: "row",
  },
  text: {
    color: colors.secondary,
  },
});

export default ItemPicker;
