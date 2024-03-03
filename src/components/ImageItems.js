import { View, TouchableHighlight, Image, StyleSheet } from "react-native";
import React from "react";

const ImageItems = ({ imagesUri, onDelete }) => {
  return (
    <View style={styles.image_container}>
      {imagesUri.length !== 0
        ? imagesUri.map((uri) => (
            <TouchableHighlight onPress={() => onDelete(uri)} key={uri}>
              <View key={uri}>
                <Image source={{ uri: uri }} style={styles.image} />
              </View>
            </TouchableHighlight>
          ))
        : null}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    margin: 4,
  },
  image_container: {
    flexDirection: "row",
    flex: 1,
  },
});

export default ImageItems;
