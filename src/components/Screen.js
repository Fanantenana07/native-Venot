import { View, Text, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import React from "react";
import { Children } from "react/cjs/react.production.min";

export default function Screen({ children }) {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
}
const styles = StyleSheet.create({
  screen: {
    marginVertical: StatusBar.currentHeight,
    flex: 1,
  },
});
