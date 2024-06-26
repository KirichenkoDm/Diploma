import React from "react";
import { useField } from "formik";
// import { StyledInputRadio } from "./cs-input-radio-styled";
import { Roles } from "../../Utils/enums";

type Props = {
  name: string,
  value: Roles
  checked?: boolean
};

export const InputRadioRole = (props: Props) => {
  const [field] = useField({ ...props });
  return (<div className="RadioInput">
    <input
      type="radio" {...field}
      name={props.name}
      value={props.value}
      checked={props.checked}
    />
    {props.value}
  </div>);
};
