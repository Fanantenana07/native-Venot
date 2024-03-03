import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../configs/colors";
export default function NewAddButton({ onPress }) {
  return (
    <View>
      <TouchableWithoutFeedback style={styles.plus} onPress={onPress}>
        <MaterialCommunityIcons style={styles.icon} name="plus-circle" />
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  plus: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: 100,
    bottom: 100,
    backgroundColor: colors.warning,
    borderRadius: 40,
  },
  icon: {
    fontSize: 45,
    color: colors.secondary,
  },
});
