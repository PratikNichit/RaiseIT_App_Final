import React from "react";
import { useFormikContext } from "formik";

import AppButton from "../AppButton";

function AppSubmitButton({ tittle, style }) {
  const { handleSubmit } = useFormikContext();
  return <AppButton tittle={tittle} onPress={handleSubmit} style={style} />;
}

export default AppSubmitButton;
