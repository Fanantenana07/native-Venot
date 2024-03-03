import React from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import InputForm from "./InputForm";

const AppInputForm = ({ name, ...rest }) => {
  const { errors, setFieldValue, setFieldTouched, touched } =
    useFormikContext();

  return (
    <>
      <InputForm
        OnChange={setFieldValue}
        onBlur={() => setFieldTouched(name)}
        name={name}
        {...rest}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppInputForm;
