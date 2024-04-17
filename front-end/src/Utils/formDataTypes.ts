import { Roles, Topics } from "./enums";

export type RegistrationFormData = {
  email: string,
  name: string,
  surname: string,
  password: string,
  _id: string | null,
  role: Roles,
}

export type AutorisationFormData = {
  email: string,
  password: string
}

export type SearchFormData = {
  page: number
  searchQuery: string | null,
  topic: Topics | string,
  nextPagePossible: boolean
}

export type EditUserFormData = {
  name: string,
  surname: string,
}
