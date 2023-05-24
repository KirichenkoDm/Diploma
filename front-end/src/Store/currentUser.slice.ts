import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Roles } from "../Utils/enums";
import { RootState } from "./store";
import { currentUser } from "../Utils/interfaces";
import { AutorisationFormData, EditUserFormData, RegistrationFormData } from "../Utils/formDataTypes";

const guestUser: currentUser = {
  email: null,
  name: "Guest",
  surname: null,
  password: null,
  role: Roles.guest,
  courses: []
};

export const currentUserSlice = createSlice({
  name: "currentUser",
  initialState: guestUser,
  reducers: {
    singUp: (state, action: PayloadAction<RegistrationFormData>) => {
      console.log(JSON.stringify(action.payload));
      fetch("http://localhost:3001/user/signup", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(action.payload)
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
        });
      return { ...action.payload, courses: [] };
    },

    singIn: (state, action: PayloadAction<AutorisationFormData>) => {
      fetch("http://localhost:3001/user/singin", {
        method: "GET", // ???
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(action.payload)
      })
        .then((response) => response.json())
        .then((result) => result);
    },

    logOut: () => {
      // clear local storage
      return guestUser;
    },

    deleteAccount: () => {
      fetch("http://localhost:3001/user/", /* userId */{
        method: "Delete",
        headers: {
          "Content-type": "application/json"
        }
      })
        .then((response) => response.json())
        .then((result) => console.log(result));
      return guestUser;
    },

    editUser: (state, action: PayloadAction<EditUserFormData>) => {
      // fetch
      return ({ ...state, ...action.payload });
    },

    leaveCourse: (state, action: PayloadAction<String>) => {
      return ({ ...state, ...action.payload });
    },

    deleteCourse: (state, action: PayloadAction<String>) => {
      return ({ ...state, ...action.payload });
    }
  }
});

export const { singUp, singIn, logOut, deleteAccount, editUser, leaveCourse, deleteCourse } = currentUserSlice.actions;

export const selectCurrentUser = (state: RootState) => state.currentUser;

export default currentUserSlice.reducer;
