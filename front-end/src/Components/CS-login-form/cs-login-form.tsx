import { FC } from "react";
import { StyledLogInForm } from "./cs-login-form-styled";
import { Formik } from "formik";
import { AutorisationFormData } from "../../Utils/formDataTypes";
import { SubmitHandler, ValidateHandler } from "./cs-login-form-handlers";
import { useAppDispatch } from "../../Utils/hooks";
import { InputText } from "../CS-input-text/cs-input-text";

const validate = ValidateHandler;

export const LogInForm: FC = () => {
  const dispatch = useAppDispatch();
  return (
    <StyledLogInForm>
      <Formik
        initialValues= {{
          email: "",
          password: ""
        } as AutorisationFormData}
        validate = {validate}
        onSubmit = {(values) => {
          SubmitHandler(values, dispatch);
        }}
      >
        { formik => (
          <form onSubmit={formik.handleSubmit}>
            <InputText
              name="email"
              id="email"
              placeholder="Email"
            />
            <InputText
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
            <button type="submit">Log in</button>
          </form>
        )}
      </Formik>
    </StyledLogInForm>
  );
};
