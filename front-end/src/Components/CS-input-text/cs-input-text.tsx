import React from "react";
import { FieldHookConfig, useField } from "formik";
import { StyledInputText } from "./cs-input-text-styled";

export const InputText = (props: FieldHookConfig<any>) => {
  const [field, meta] = useField(props);

  return (
    <StyledInputText>
      <input {...field}
        placeholder={props.placeholder}
        type={props.type ? props.type : "text"}
        id={props.id}
      />
      {meta.touched && meta.error
        ? (
          <p color="red">{meta.error}</p>
        )
        : null }
    </StyledInputText>
  );
};
