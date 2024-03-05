import { View, StyleSheet, TextInput } from "react-native";
import React from "react";
import AppText from "./AppText";
import colors from "../configs/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const InputForm = ({
  label,
  name,
  OnChange,
  placeholder,
  icon,
  ...otherProps
}) => {
  return (
    <View style={styles.form_control}>
      <View style={styles.container}>
        <MaterialCommunityIcons name={icon} size={30} style={styles.icon} />
        <TextInput
          onChangeText={(text) => OnChange(name, text)}
          placeholder={placeholder}
          style={styles.input}
          {...otherProps}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  form_control: {
    flexDirection: "column",
    width: "100%",
    marginVertical: 5,
    borderRadius: 50,
    paddingHorizontal: 10,
    backgroundColor: colors.light_gray,
  },
  input: {
    marginVertical: 8,
    padding: 8,
    borderColor: colors.light_gray,
    flex: 1,
    fontWeight: "bold",
  },
  icon: {
    marginHorizontal: 10,
    color: colors.secondary,
  },
});

export default InputForm;
