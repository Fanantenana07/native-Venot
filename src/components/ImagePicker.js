import {
  View,
  Text,
  Alert,
  Button,
  TouchableHighlight,
  TouchableWithoutFeedback,
  StyleSheet,
  Image,
} from "react-native";
import * as ImagePick from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useEffect } from "react";
import { useFormikContext } from "formik";

import colors from "../config/colors";
import ErrorMessage from "./ErrorMessage";
import ImageItems from "./ImageItems";

const ImagePicker = ({ name }) => {
  const { errors, setFieldTouched, setFieldValue, values, touched } =
    useFormikContext();
  const permission = async () => {
    const { granted } = await ImagePick.requestCameraPermissionsAsync();
    if (!granted) {
      Alert.alert(
        "Warning",
        "You need to enable permission to access the Library"
      );
    }
  };
  const getImage = async () => {
    const { uri } = await ImagePick.launchImageLibraryAsync({
      mediaTypes: ImagePick.MediaTypeOptions.Images,
    });
    setFieldTouched(name, true);
    setFieldValue(name, [...values[name], uri]);
  };
  useEffect(() => {
    permission();
  });
  const onDelete = (uri) => {
    Alert.alert("Alert", "Are you sure to delete this pic?", [
      {
        text: "Yes",
        onPress: () => {
          const data = values[name].filter((u) => u !== uri);
          setFieldValue(name, data);
        },
      },
      {
        text: "No",
      },
    ]);
  };

  return (
    <View>
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={getImage}>
          <MaterialCommunityIcons
            name="camera"
            size={30}
            color={colors.secondary}
            style={styles.icon}
          />
        </TouchableWithoutFeedback>
        <ImageItems imagesUri={values[name]} onDelete={onDelete} />
      </View>
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
};
const styles = StyleSheet.create({
  icon: {
    marginRight: 10,
  },
  container: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    width: 75,
    borderRadius: 2,
    margin: 4,
  },
});

export default ImagePicker;
