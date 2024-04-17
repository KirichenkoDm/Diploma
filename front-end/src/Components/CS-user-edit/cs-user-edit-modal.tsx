import { Formik } from "formik";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../Utils/hooks";
import { EditUserFormData } from "../../Utils/formDataTypes";
import { SubmitHandler, ValidateHandler } from "./cs-user-edit-handlers";
import { InputText } from "../CS-input-text/cs-input-text";

const validate = ValidateHandler;

interface modalProps {
  setModalIsOpen: Function,
};

export const UserEditModal: FC<modalProps> = (props) => {
  const currentUser = useAppSelector(state => state.currentUser);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    props.setModalIsOpen(false);
  };

  return (<>
    <Formik
      initialValues= {{
        name: currentUser.name,
        surname: currentUser.surname
      } as EditUserFormData}
      validate = {validate}
      onSubmit = {(values) => {
        SubmitHandler(values, dispatch);
        handleClose();
      }}
    >
      { formik => (
        <form onSubmit={formik.handleSubmit}>
          <h1>Create new user</h1>

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
          <button onClick={handleClose}>I change my mind</button>
          <button type="submit">Update</button>
        </form>
      )}
    </Formik>
  </>);
};
