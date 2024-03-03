import { View, StyleSheet, Image } from "react-native";
import React from "react";

import AppText from "./AppText";
const AppProfile = ({ title, image }) => {
  return (
    <View style={styles.header}>
      <Image style={styles.image} source={image} />
      <AppText style={styles.text}>{title} </AppText>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 25,
  },
});

export default AppProfile;
