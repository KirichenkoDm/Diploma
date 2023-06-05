import { FormikErrors } from "formik";
import { AutorisationFormData } from "../../Utils/formDataTypes";
import { FormError } from "../../Utils/errorDataTypes";
import { fetchSignIn } from "../../Store/currentUser.slice";

const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const ValidateHandler = (formData: AutorisationFormData): FormikErrors<FormError> => {
  const errors: FormikErrors<FormError> = {};

  if (!formData.email) {
    errors.email = "Required";
  } else if (!emailPattern.test(formData.email)) {
    errors.email = "Invalid email";
  }
  if (!formData.password) {
    errors.password = "Required";
  } else if (formData.password.length < 6) {
    errors.password = "Password is too short";
  }

  return errors;
};

export const SubmitHandler = (formData:AutorisationFormData, dispatch: any) => {
  dispatch(fetchSignIn(formData));
};
