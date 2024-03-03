import { View, Text } from "react-native";
import React from "react";
import { useFormikContext } from "formik";
import ImagePicker from "./ImagePicker";

const FormImagePicker = () => {
  //   const { errors, handleChange, setFieldTouched, touched } = useFormikContext();
  return (
    <View>
      <ImagePicker />
    </View>
  );
};

export default FormImagePicker;
