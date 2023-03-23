import { RegistrationFormData } from "../../Utils/formDataTypes";

export const ValidateForm = (formData: RegistrationFormData) => {
  Object.values(formData).every((value) => {
    if(typeof value === 'string' && value.length == 0)
      return false;
  }
  )
  return true;
}

export const SubmitHandler = (formData:RegistrationFormData) => {
  console.log(formData)
}