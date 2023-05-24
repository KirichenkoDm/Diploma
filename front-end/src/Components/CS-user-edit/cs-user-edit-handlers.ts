import { FormikErrors } from "formik";
import { EditUserFormData } from "../../Utils/formDataTypes";
import { FormError } from "../../Utils/errorDataTypes";
import { editUser } from "../../Store/currentUser.slice";

const strPattern = /^[A-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

export const ValidateHandler = (formData: EditUserFormData):FormikErrors<FormError> => {
  const errors: FormikErrors<FormError> = {};

  if (!formData.name) {
    errors.name = "Required";
  } else if (formData.name.length > 30) {
    errors.name = "Name is too long";
  } else if (!strPattern.test(formData.name)) {
    errors.name = "Invalid name";
  }

  if (!formData.surname) {
    errors.surname = "Required";
  } else if (formData.surname.length > 30) {
    errors.surname = "Surname is too long";
  } else if (!strPattern.test(formData.surname)) {
    errors.surname = "invalid surname";
  }

  return errors;
};

export const SubmitHandler = (formData:EditUserFormData, dispatch: any) => {
  dispatch(editUser(formData));
};
