import { View, StyleSheet } from "react-native";
import React, { useState } from "react";

import AppPicker from "./AppPicker";
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";

const Select = ({ data, name }) => {
  const { errors, setFieldTouched, setFieldValue, values, touched } =
    useFormikContext();
  const [show, setShow] = useState(false);
  const onSelectItem = (item) => {
    setFieldValue(name, item);
  };
  const onClose = () => {
    setShow(false);
  };

  return (
    <View style={styles.select}>
      <AppPicker
        selectedItem={values[name]}
        data={data}
        onSelectItem={onSelectItem}
        onClose={onClose}
        show={show}
        setShow={setShow}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
};
const styles = StyleSheet.create({
  select: {
    marginTop: 8,
  },
});

export default Select;
