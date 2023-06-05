import React from "react";
import { FieldHookConfig, useField } from "formik";
import { StyledInputText } from "./cs-input-text-styled";

export const InputText = (props: FieldHookConfig<any>) => {
  const [field, meta] = useField(props);
  if (meta.touched && meta.error) {
    console.log("her");
  }
  return (
    <StyledInputText>
      <input {...field}
        placeholder={props.placeholder}
        type={props.type ? props.type : "text"}
        id={props.id}
        className="FormInput"
      />
      {meta.touched && meta.error
        ? (
          <p>{meta.error}</p>
        )
        : <p>{"\u00A0"}</p> }
    </StyledInputText>
  );
};
