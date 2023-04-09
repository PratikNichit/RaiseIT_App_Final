import React from "react";
import { useFormikContext } from "formik";

import AppTextinput from "../AppTextinput";
import ErrorMessage from "./ErrorMessage";

function AppFormField({ name, width, ...otherprops }) {
  const { handleChange, errors, setFieldTouched, touched, setFieldValue } =
    useFormikContext();
  return (
    <>
      <AppTextinput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        width={width}
        {...otherprops}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;
