import { StyleSheet,TouchableWithoutFeedback,View, TouchableHighlight} from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

function DeleteComponent({ handleDelete }) {
  return (
    <TouchableWithoutFeedback style={styles.container} onPress={handleDelete}>
      <View style={styles.delete}>
        <MaterialCommunityIcons name="delete" size={25} color={colors.white} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container : {
    flex:1
  },
  delete: {
    backgroundColor: colors.warning,
    justifyContent: "center",
    alignItems: "center",
    height :"60%",
    width : "30%"
  

  },
  icon: {
    padding: 8,
  },
});
export default DeleteComponent;
