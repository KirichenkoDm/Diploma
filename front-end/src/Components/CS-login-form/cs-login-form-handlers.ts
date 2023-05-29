import { FormikErrors } from "formik";
import { AutorisationFormData } from "../../Utils/formDataTypes";
import { FormError } from "../../Utils/errorDataTypes";
import { fetchSignIn } from "../../Store/currentUser.slice";

const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const ValidateHandler = (formData: AutorisationFormData): FormikErrors<FormError> => {
  const error: FormikErrors<FormError> = {};

  if (!formData.email) {
    error.email = "Required";
  } else if (!emailPattern.test(formData.email)) {
    error.email = "Invalid email";
  }

  return error;
};

export const SubmitHandler = (formData:AutorisationFormData, dispatch: any) => {
  dispatch(fetchSignIn(formData));
};
