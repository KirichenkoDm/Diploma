import { FC } from "react";
import { SubmitHandler, ValidateHandler } from "./cs-regiatration-form-handlers";
import { StyledRegistrationForm } from "./cs-registration-form-styled";
import { Roles } from "../../Utils/enums";
import { RegistrationFormData } from "../../Utils/formDataTypes";
import { Formik } from "formik";
import { InputText } from "../CS-input-text/cs-input-text";
import { InputRadioRole } from "../CS-Input-radio/cs-input-radio";
import { useAppDispatch } from "../../Utils/hooks";
import { Link, useNavigate } from "react-router-dom";

const validate = ValidateHandler;

export const RegistrationForm: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return (
    <StyledRegistrationForm>
      <Formik
        initialValues= {{
          email: "",
          name: "",
          surname: "",
          password: "",
          role: Roles.student
        } as RegistrationFormData}
        validate = {validate}
        onSubmit = {(values) => {
          SubmitHandler(values, dispatch);
          navigate("/");
        }}
      >
        { formik => (
          <form onSubmit={formik.handleSubmit}>
            <h1>Create new user</h1>

            <InputText
              name="email"
              id="email"
              placeholder="Email"
            />

            <InputText
              name="name"
              id="name"
              placeholder="Name"
            />

            <InputText
              name="surname"
              id="surname"
              placeholder="Surname"
            />

            <label htmlFor="password">Create password</label>
            <InputText
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />

            <InputRadioRole
              name="role"
              value={Roles.student}
              checked={true}
            />
            <InputRadioRole
              name="role"
              value={Roles.teacher}
            />
            <button type="submit">Create User</button>
          </form>
        )}
      </Formik>
      <Link to="/singin"><p>i already have account</p></Link>
    </StyledRegistrationForm>
  );
};
