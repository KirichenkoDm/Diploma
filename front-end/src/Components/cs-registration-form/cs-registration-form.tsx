import React, {FC, FormEvent, useState} from "react";
import { SubmitHandler, ValidateForm } from "./cs-regiatration-form-handlers";
import { StyledRegistrationForm } from "./cs-registration-form-styled";
import { Roles } from "../../Utils/enums";



export const RegistrationForm: FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    surname: "",
    password: "",
    role: Roles.student,
  })

  let submitError = false;
  const nameError = formData.name.length > 30? false : true;
  const surnameError = formData.surname.length > 30? false : true;

  const handleSumbit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(ValidateForm(formData)){
      SubmitHandler(formData); 
    }
    else {
      submitError = true;
    }
  }

  const handleInputChange = (e:FormEvent<HTMLInputElement>) => {
    submitError = false;
    setFormData({
      ...formData,
      [e.currentTarget.name]:e.currentTarget.value
    })
  }

  return <StyledRegistrationForm>
    
    <form onSubmit={handleSumbit}>
      <h1>Create new user</h1>
      <input 
      type="email" 
      placeholder="Email"
      id="emailxyz"
      name="email"
      onChange={handleInputChange}
      value={formData.email}
      />
      <input 
      type="text" 
      placeholder="Name" 
      id="name"
      name="name"
      onChange={handleInputChange}
      value={formData.name}
      />
      {
      nameError && 
      <label htmlFor="name">Name is to long</label>
      }
      <input 
      type="text" 
      placeholder="Surname" 
      id="surname"
      name="surname"
      onChange={handleInputChange}
      value={formData.surname}
      />
      {
      surnameError && 
      <label htmlFor="surname">Name is to long</label>
      }
      <label htmlFor="password">Create password</label>
      <input 
      type="password" 
      placeholder="Password" 
      id="password" 
      name="password"
      onChange={handleInputChange} 
      value={formData.password}
      />
      <div onChange={handleInputChange}>
        <input
        type="radio" 
        id ="student" 
        name="role" 
        value="student" 
        checked={formData.role == Roles.student}
        />
        <label htmlFor="student">Student</label>
        <input 
        type="radio" 
        id ="teacher" 
        name="role" 
        value="teacher" 
        checked={formData.role != Roles.student}
        />
        <label htmlFor="teacher">Teacher</label>
      </div>
      {
      submitError && 
      <div>
        Some fields are empty!
      </div>
      }
    </form>
  </StyledRegistrationForm>
}