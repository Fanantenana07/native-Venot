import { View, StyleSheet } from "react-native";
import React from "react";
import colors from "../config/colors";

const ListItemSeparator = () => {
  return <View style={styles.separator}></View>;
};

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 5,
    backgroundColor: colors.white,
  },
});

export default ListItemSeparator;
