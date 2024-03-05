import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import React, { useState } from "react";
import AppText from "./AppText";
import colors from "../configs/colors";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const ListItem = ({ item, onClick, renderRightActions }) => {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight
          underlayColor={colors.light_gray}
          style={styles.container}
          onPress={() => onClick(item)}
        >
          yetyrt
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginVertical: 8,
    padding: 8,
  },
});

export default ListItem;
