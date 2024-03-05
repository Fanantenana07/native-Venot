import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import colors from "../configs/colors";

const CustomButton = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    width: "100%",
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.secondary,
  },
});
export default CustomButton;
