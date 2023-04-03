import { Roles } from "./enums";

export type RegistrationFormData = {
  email: string,
  name: string,
  surname: string,
  password: string,
  role: Roles,
}
