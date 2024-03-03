import { View, StyleSheet, Image } from "react-native";
import React from "react";
import AppText from "./AppText";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const Profile = ({ item, style }) => {
  return (
    <View style={[styles.container, style]}>
      {item.image !== undefined ? (
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={item.image} />
        </View>
      ) : (
        <MaterialCommunityIcons
          style={styles.icon}
          name={item.icon}
          size={25}
        />
      )}
      <View style={{ justifyContent: "center" }}>
        <AppText style={styles.title}>{item.title}</AppText>
        {item.subtitle && (
          <AppText style={styles.description}>{item.subtitle}</AppText>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    borderRadius: 75,
  },
  title: {
    fontSize: 16,
    fontWeight: "normal",
  },
  description: {
    fontSize: 12,
    color: colors.muted,
  },
  icon: {
    marginRight: 15,
    color: colors.primary,
  },
  imageContainer: {
    width: 75,
    height: 75,
    borderRadius: 75,
    // padding: 10,
    backgroundColor: "red",
    marginRight: 20,
  },
});

export default Profile;
