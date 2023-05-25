import { FC } from "react";
import { StyledLogInForm } from "./cs-login-form-styled";
import { Formik } from "formik";
import { AutorisationFormData } from "../../Utils/formDataTypes";
import { SubmitHandler, ValidateHandler } from "./cs-login-form-handlers";
import { useAppDispatch } from "../../Utils/hooks";
import { InputText } from "../CS-input-text/cs-input-text";
import { Link, useNavigate } from "react-router-dom";

const validate = ValidateHandler;

export const LogInForm: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
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
          navigate("/");
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
      <Link to="/singup"><p>i dont have account</p></Link>
    </StyledLogInForm>
  );
};
