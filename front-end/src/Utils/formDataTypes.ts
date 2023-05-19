import { Roles, Topics } from "./enums";

export type RegistrationFormData = {
  email: string,
  name: string,
  surname: string,
  password: string,
  role: Roles,
}

export type AutorisationFormData = {
  email: string,
  password: string
}

export type SearchFormData = {
  page: number
  querry: string | null,
  topic: Topics | string | null,
}
