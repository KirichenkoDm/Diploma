import { FormikErrors } from "formik";
import { FormError } from "../../Utils/errorDataTypes";
import { RegistrationFormData } from "../../Utils/formDataTypes";

const strPattern = /^[A-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const ValidateHandler = (formData: RegistrationFormData):FormikErrors<FormError>  => {
  let errors: FormikErrors<FormError> = {}

  if(!formData.email) {
    errors.email = 'Required';
  } else if (!emailPattern.test(formData.email)) {
    errors.email = "Invalid email";
  }

  if(!formData.name) {
    errors.name = 'Required';
  } else if(formData.name.length > 30){
    errors.name = "Name is too long";
  }  
  else if (!strPattern.test(formData.name)) {
    errors.name = "Invalid name";
  }

  if(!formData.surname) {
    errors.surname = 'Required';
  } else if(formData.surname.length > 30){
    errors.surname = "Surname is too long";
  }  
  else if (!strPattern.test(formData.surname)) {
    errors.surname = "invalid surname";
  }

  return errors;
}

export const SubmitHandler = (formData:RegistrationFormData) => {
  console.log(formData)
}