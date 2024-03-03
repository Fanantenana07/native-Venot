import { Text, StyleSheet } from "react-native";
import React from "react";
import colors from "../configs/colors";

export default function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}
const styles = StyleSheet.create({
  text: {
    color: colors.secondary,
    fontWeight: "500",
  },
});
