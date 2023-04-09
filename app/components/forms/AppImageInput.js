import React from "react";
import { useFormikContext } from "formik";

import ImageInput from "../ImageInput";
import ErrorMessage from "./ErrorMessage";
import { View } from "react-native";

function AppImageInput({ name, style }) {
  const { handleChange, errors, touched, setFieldValue, values } =
    useFormikContext();

  return (
    <>
      <View style={style}>
        <ImageInput
          imageUri={values[name]}
          onBlur={() => setFieldTouched(name)}
          onChangeImage={handleChange(name)}
        />
      </View>
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppImageInput;
