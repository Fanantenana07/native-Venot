import { StyleSheet } from "react-native";
import React from "react";
import colors from "../configs/colors";
import AppText from "./AppText";

const ErrorMessage = ({ error, visible }) => {
  if (!error || !visible) return null;
  return <AppText style={styles.error}>{error}</AppText>;
};

const styles = StyleSheet.create({
  error: {
    color: colors.warning,
    marginTop: 8,
  },
});
export default ErrorMessage;
